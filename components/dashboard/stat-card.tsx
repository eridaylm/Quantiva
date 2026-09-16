"use client";

// components/dashboard/stat-card.tsx
import { useEffect, useRef } from "react";
import { DashboardStat } from "@/types/dashboard";
import { BrainCircuit, Award, Info, Star } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

function MiniChart({ data, type }: { data: number[], type: "score" | "rank" }) {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isMounted = true;
    let root: any;

    const initChart = async () => {
      const am5 = await import("@amcharts/amcharts5");
      const am5xy = await import("@amcharts/amcharts5/xy");

      if (!isMounted || !chartRef.current) return;

      root = am5.Root.new(chartRef.current);
    
      const computedFont = typeof window !== 'undefined' ? window.getComputedStyle(chartRef.current).fontFamily : "Inter, sans-serif";
      (root.container as any).set("fontFamily", computedFont);
    
      // Remove watermark
      if (root._logo) {
        root._logo.dispose();
      }
    
      // Create chart
      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "none",
          wheelY: "none",
          paddingLeft: -10, // Stick to left edge
          paddingRight: -10, // Stick to right edge
          paddingTop: 10,
          paddingBottom: 0, // Stick to bottom
          layout: root.verticalLayout
        })
      );

      // Create axes
      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "day",
          startLocation: 0.05,
          endLocation: 0.95,
          renderer: am5xy.AxisRendererX.new(root, {
            minGridDistance: 10,
            strokeOpacity: 0,
          })
        })
      );
    
      xAxis.get("renderer").grid.template.setAll({ forceHidden: true });
      xAxis.get("renderer").labels.template.setAll({
        fill: am5.color(0x64748b),
        fontSize: 9,
        fontWeight: "700",
        fontFamily: typeof window !== 'undefined' ? window.getComputedStyle(chartRef.current!).fontFamily : "Inter, sans-serif",
        paddingTop: 5,
        paddingBottom: 15,
      });

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          extraMin: 0.1,
          extraMax: 0.1,
          renderer: am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0
          })
        })
      );
      yAxis.get("renderer").grid.template.setAll({ forceHidden: true });
      yAxis.get("renderer").labels.template.setAll({ forceHidden: true });

      const isScore = type === "score";
      const color = isScore ? am5.color(0x6366f1) : am5.color(0x10b981);

      // Add series
      const series = chart.series.push(
        am5xy.SmoothedXLineSeries.new(root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          categoryXField: "day",
          stroke: color,
          tension: 0.4
        })
      );

      series.strokes.template.setAll({
        strokeWidth: 2,
      });
    
      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 3.5,
            fill: color,
            stroke: am5.color(0xffffff),
            strokeWidth: 1.5
          })
        });
      });

      // Add gradient fill
      series.fills.template.setAll({
        fillOpacity: 1,
        visible: true,
        fill: color,
      });
    
      series.fills.template.set("fillGradient", am5.LinearGradient.new(root, {
        stops: [{
          opacity: 0.15
        }, {
          opacity: 0
        }],
        rotation: 90
      }));

      // Data format
      const chartData = data.map((val, idx) => {
        const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
        return { day: days[idx] || `D${idx}`, value: val };
      });
      xAxis.data.setAll(chartData);
      series.data.setAll(chartData);

      series.appear(1000);
      chart.appear(1000, 100);
    };

    initChart();

    return () => {
      isMounted = false;
      if (root) root.dispose();
    };
  }, [data, type]);

  return <div ref={chartRef} className="w-full h-full" />;
}

export default function StatCard(stat: DashboardStat) {
  const { t: dict } = useLanguage();

  if (stat.type === "best") {
    return (
      <div className="relative overflow-hidden rounded-[24px] border border-orange-100 dark:border-orange-900/50 bg-[#fffdf5] dark:bg-orange-950/20 p-6 h-[280px]">
        <div className="z-10 relative">
          <div className="flex justify-between items-start">
            <h3 className="text-[13px] font-bold text-slate-800 dark:text-slate-200">{dict.dashboard.badgeCard.bestTest}</h3>
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-orange-200 dark:border-orange-800 bg-white dark:bg-slate-800 shadow-sm">
               <Star className="h-5 w-5 text-orange-400" />
            </div>
          </div>
          <h2 className="mt-0.5 text-[28px] font-semibold text-slate-900 dark:text-white leading-tight w-2/3 relative z-10">
            {stat.value === "Belum Ada" ? dict.dashboard.badgeCard.noMathYet : stat.value}
          </h2>
          <div className="mt-4 flex flex-col items-start gap-1 relative z-10">
            <div className="inline-flex items-center rounded-lg bg-orange-100/60 dark:bg-orange-900/40 px-3 py-1.5 text-[11px] font-bold text-orange-600 dark:text-orange-400">
              {dict.dashboard.badgeCard.startTestNow}
            </div>
            {stat.value !== "Belum Ada" && (
              <p className="mt-2"><span className="text-4xl font-black text-orange-500">{stat.badge?.split(" ")[2] || "0"}</span> <span className="text-sm font-bold text-slate-400 dark:text-slate-500">/1000</span></p>
            )}
          </div>
        </div>
        
        <div className="absolute -bottom-10 -right-10 h-56 w-56 z-0 flex items-center justify-center text-orange-200/60 dark:text-orange-900/30">
           <BrainCircuit className="h-full w-full" strokeWidth={1} />
        </div>
      </div>
    );
  }

  const isScore = stat.type === "score";
  const bgClass = isScore ? "bg-[#f8faff] dark:bg-indigo-950/20 border-indigo-100/50 dark:border-indigo-900/50" : "bg-[#f4fdf6] dark:bg-emerald-950/20 border-emerald-100/50 dark:border-emerald-900/50";
  const titleColor = isScore ? "text-indigo-900 dark:text-indigo-400" : "text-emerald-700 dark:text-emerald-400";
  
  const displayTitle = isScore ? dict.dashboard.statCard.mathScore : dict.dashboard.statCard.rank;
  const displayBadge = isScore ? dict.dashboard.statCard.beginner : "";
  const displayTrend = isScore ? dict.dashboard.statCard.noTestHistory : dict.dashboard.statCard.completeFirstTest;
  
  return (
    <div className={`relative overflow-hidden rounded-[24px] border ${bgClass} p-6 shadow-sm h-[280px]`}>
      <div className="flex justify-between items-start relative z-10 w-full">
        <h3 className={`text-[13px] font-bold flex items-center gap-1.5 ${titleColor}`}>
          {displayTitle}
          <Info className="h-3.5 w-3.5 opacity-60" />
        </h3>
        
        {isScore ? (
          <div className="inline-flex items-center rounded-lg bg-indigo-100/70 dark:bg-indigo-900/40 px-3 py-1.5 text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
            {displayBadge}
          </div>
        ) : (
          <div className={`flex h-9 w-9 items-center justify-center rounded-[10px] bg-white dark:bg-slate-800 shadow-sm border border-emerald-100 dark:border-emerald-800`}>
            <Award className="h-5 w-5 text-emerald-500" />
          </div>
        )}
      </div>
      
      <div className="mt-0.5 relative z-10">
        <p className={`text-[42px] font-semibold text-slate-900 dark:text-white tracking-tight leading-none flex items-baseline gap-1`}>
          {stat.value.replace("/1000", "")}
          {isScore && <span className="text-[15px] font-bold text-slate-500 dark:text-slate-400">/1000</span>}
        </p>
        
        <div className="mt-2 text-[11px] font-bold">
          <p className="text-slate-500 dark:text-slate-400">{displayTrend}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[150px] z-0 pointer-events-none">
         {stat.chartData && <MiniChart data={stat.chartData} type={stat.type as "score" | "rank"} />}
      </div>
    </div>
  );
}