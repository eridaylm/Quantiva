"use client";

// components/charts/weekly-progress-chart.tsx
import { useEffect, useRef } from "react";
import { weeklyProgressData } from "@/data/dashboard";
import { useLanguage } from "@/contexts/language-context";

export default function WeeklyProgressChart() {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { t: dict } = useLanguage();

  useEffect(() => {
    let isMounted = true;
    let root: any;

    const initChart = async () => {
      const am5 = await import("@amcharts/amcharts5");
      const am5xy = await import("@amcharts/amcharts5/xy");

      if (!isMounted || !chartRef.current) return;

      root = am5.Root.new(chartRef.current);
      root.setThemes([am5.Theme.new(root)]);
    
      const computedFont = typeof window !== 'undefined' ? window.getComputedStyle(chartRef.current).fontFamily : "Inter, sans-serif";
      (root.container as any).set("fontFamily", computedFont);

      // Remove watermark
      if (root._logo) {
        root._logo.dispose();
      }

      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "none",
          wheelY: "none",
          paddingLeft: 0,
          paddingRight: 0,
          layout: root.verticalLayout,
        })
      );

      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "day",
          renderer: am5xy.AxisRendererX.new(root, {
            minGridDistance: 20,
            strokeOpacity: 0,
          }),
        })
      );
    
      // Hide x-axis grid line
      xAxis.get("renderer").grid.template.setAll({
        forceHidden: true
      });
    
      xAxis.get("renderer").labels.template.setAll({
        fill: am5.color(0x94a3b8),
        fontSize: 11,
        fontWeight: "600",
        fontFamily: computedFont,
        paddingTop: 10
      });

      const translatedData = weeklyProgressData.map((data, index) => ({
        ...data,
        day: dict.dashboard.weeklyChart.days[index]
      }));

      xAxis.data.setAll(translatedData);

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          min: 0,
          max: 30, // Max score according to dummy data
          renderer: am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0,
          }),
        })
      );
    
      // Hide y axis labels
      yAxis.get("renderer").labels.template.setAll({
        forceHidden: true
      });
      // Hide y axis grid lines
      yAxis.get("renderer").grid.template.setAll({
        forceHidden: true
      });

      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: dict.dashboard.weeklyChart.score,
          xAxis,
          yAxis,
          valueYField: "score",
          categoryXField: "day",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{categoryX}: {valueY} " + dict.dashboard.weeklyChart.score,
          }),
        })
      );

      series.columns.template.setAll({
        cornerRadiusTL: 6,
        cornerRadiusTR: 6,
        fillOpacity: 1,
        strokeOpacity: 0,
        width: am5.percent(40),
        fill: am5.color(0x7c5ff0), // match design purple
      });

      // Add labels on top of columns
      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 1,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: am5.color(0x334155),
            centerY: am5.p100,
            centerX: am5.p50,
            populateText: true,
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "Inter, sans-serif",
            dy: -5
          })
        });
      });

      // Add hover state
      series.columns.template.states.create("hover", {
        fillOpacity: 0.8
      });

      series.data.setAll(translatedData);

      // Target Line (ValueAxis Range)
      const targetDataItem = yAxis.makeDataItem({
        value: 15, // target is 15
      });
    
      const targetRange = yAxis.createAxisRange(targetDataItem);
      targetRange.get("grid")?.setAll({
        strokeOpacity: 0.5,
        stroke: am5.color(0x10b981), // emerald-500
        strokeDasharray: [4, 4],
        strokeWidth: 2,
      });
    
      targetRange.get("label")?.setAll({
        text: "15",
        fill: am5.color(0x10b981),
        fontSize: 10,
        fontWeight: "bold",
        fontFamily: "Inter, sans-serif",
        background: am5.Rectangle.new(root, {
          fill: am5.color(0xffffff)
        }),
        paddingLeft: 4,
        paddingRight: 4,
        centerY: am5.p50,
      });

      chart.appear(1000, 100);
      series.appear(1000);
    };

    initChart();

    return () => {
      isMounted = false;
      if (root) root.dispose();
    };
  }, []);

  return (
    <div className="rounded-[24px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm h-full flex flex-col">
      <h3 className="text-[15px] font-bold text-slate-900 dark:text-white tracking-tight">{dict.dashboard.weeklyChart.title}</h3>
      <p className="mt-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">{dict.dashboard.weeklyChart.subtitle}</p>
      
      <div className="mt-4 flex-1 w-full min-h-[180px] relative">
         <div ref={chartRef} className="absolute inset-0 w-full h-full" />
      </div>

      <div className="mt-2 flex items-center justify-center gap-6 text-[11px] font-bold text-slate-500 dark:text-slate-400">
         <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#7c5ff0]"></div> {dict.dashboard.weeklyChart.completed}</div>
         <div className="flex items-center gap-1.5"><div className="w-4 border-t-2 border-dashed border-[#10b981]"></div> {dict.dashboard.weeklyChart.target}</div>
      </div>
    </div>
  );
}