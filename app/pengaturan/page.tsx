'use client';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/contexts/language-context';
import { useState, useRef } from 'react';
import DashboardSidebar from '@/components/dashboard/dashboard-sidebar';
import DashboardHeader from '@/components/dashboard/dashboard-header';
import AdminHeader from '@/components/admin/admin-header';
import { Camera, Lock, CheckCircle2, AlertCircle, X } from 'lucide-react';
import Link from 'next/link';
import Cropper from 'react-easy-crop';
import getCroppedImg from '@/utils/cropImage';
import { useCallback } from 'react';

export default function PengaturanPage() {
  const { user, updateProfile, changePassword } = useAuth();
  const { t: dict } = useLanguage();
  
  const [firstName, setFirstName] = useState(user?.firstName || user?.name?.split(' ')[0] || '');
  const [lastName, setLastName] = useState(user?.lastName || user?.name?.split(' ').slice(1).join(' ') || '');
  const [username, setUsername] = useState(user?.username || '');
  const [avatarUrl, setAvatarUrl] = useState(user?.avatarUrl || '');
  
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  
  const [profileMsg, setProfileMsg] = useState('');
  const [passMsg, setPassMsg] = useState('');
  const [passError, setPassError] = useState('');
  
  const [rawImageStr, setRawImageStr] = useState('');
  const [showCropper, setShowCropper] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const onCropComplete = useCallback((croppedArea: any, croppedAreaPx: any) => {
    setCroppedAreaPixels(croppedAreaPx);
  }, []);
  
  if (!user) return null;

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ firstName, lastName, username, avatarUrl });
    setProfileMsg(dict.settingsPage.profile.successMsg);
    setTimeout(() => setProfileMsg(''), 3000);
  };
  
  const handlePassSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPassError('');
    setPassMsg('');
    if (newPass !== confirmPass) {
      setPassError(dict.settingsPage.security.errorMismatch);
      return;
    }
    const res = changePassword(oldPass, newPass);
    if (res.success) {
      setPassMsg(dict.settingsPage.security.successMsg);
      setOldPass('');
      setNewPass('');
      setConfirmPass('');
      setTimeout(() => setPassMsg(''), 3000);
    } else {
      setPassError(res.error || dict.settingsPage.security.errorDefault);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert(dict.settingsPage.profile.photoSizeError);
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setRawImageStr(event.target?.result as string);
      setShowCropper(true);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleApplyCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(rawImageStr, croppedAreaPixels as any);
      setAvatarUrl(croppedImage);
      setShowCropper(false);
    } catch (e) {
      console.error(e);
      alert(dict.settingsPage.crop.error);
    }
  };

  const pageContent = (
    <div className="max-w-4xl mx-auto space-y-6 pt-4">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{dict.settingsPage.title}</h1>
      
      {showCropper && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-md overflow-hidden flex flex-col shadow-2xl">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 dark:text-white">{dict.settingsPage.crop.title}</h3>
              <button onClick={() => setShowCropper(false)} className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative h-64 sm:h-80 w-full bg-slate-100 dark:bg-slate-800">
              <Cropper
                image={rawImageStr}
                crop={crop}
                zoom={zoom}
                aspect={1}
                cropShape="round"
                showGrid={false}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-950 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 font-medium">{dict.settingsPage.crop.zoom}</span>
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button onClick={() => setShowCropper(false)} className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition">{dict.settingsPage.crop.cancel}</button>
                <button onClick={handleApplyCrop} className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition">{dict.settingsPage.crop.apply}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">{dict.settingsPage.profile.title}</h2>
        
        <form onSubmit={handleProfileSubmit} className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
              <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Avatar" className="h-full w-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold text-slate-400">
                    {firstName[0] || user?.name?.[0] || '?'}
                  </span>
                )}
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="text-white h-6 w-6" />
              </div>
              <input type="file" ref={fileInputRef} accept="image/*" className="hidden" onChange={handleFileChange} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{dict.settingsPage.profile.photo}</p>
              <p className="text-xs text-slate-500 mt-1">{dict.settingsPage.profile.photoFormat}</p>
              <button type="button" onClick={() => setAvatarUrl('')} className="text-xs text-red-500 font-medium mt-2 hover:underline">{dict.settingsPage.profile.removePhoto}</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">{dict.settingsPage.profile.firstName}</label>
              <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-4 text-sm outline-none focus:border-blue-500 dark:bg-slate-950 dark:border-slate-800 dark:text-white" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">{dict.settingsPage.profile.lastName}</label>
              <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-4 text-sm outline-none focus:border-blue-500 dark:bg-slate-950 dark:border-slate-800 dark:text-white" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">{dict.settingsPage.profile.username} <span className="text-slate-400 font-normal">{dict.settingsPage.profile.usernameHint}</span></label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value.replace(/\s/g, ''))} required className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-4 text-sm outline-none focus:border-blue-500 dark:bg-slate-950 dark:border-slate-800 dark:text-white" />
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <div>
              {profileMsg && <p className="text-sm text-green-600 flex items-center gap-1"><CheckCircle2 className="h-4 w-4"/> {profileMsg}</p>}
            </div>
            <button type="submit" className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              {dict.settingsPage.profile.saveBtn}
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Lock className="h-5 w-5 text-slate-400" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{dict.settingsPage.security.title}</h2>
        </div>
        
        <form onSubmit={handlePassSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">{dict.settingsPage.security.oldPass}</label>
            <input type="password" value={oldPass} onChange={e => setOldPass(e.target.value)} required className="w-full max-w-sm rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-4 text-sm outline-none focus:border-blue-500 dark:bg-slate-950 dark:border-slate-800 dark:text-white" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">{dict.settingsPage.security.newPass}</label>
            <input type="password" value={newPass} onChange={e => setNewPass(e.target.value)} required className="w-full max-w-sm rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-4 text-sm outline-none focus:border-blue-500 dark:bg-slate-950 dark:border-slate-800 dark:text-white" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">{dict.settingsPage.security.confirmPass}</label>
            <input type="password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)} required className="w-full max-w-sm rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-4 text-sm outline-none focus:border-blue-500 dark:bg-slate-950 dark:border-slate-800 dark:text-white" />
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <button type="submit" className="rounded-xl bg-slate-900 dark:bg-white dark:text-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
              {dict.settingsPage.security.changeBtn}
            </button>
            <button type="button" onClick={() => alert(dict.settingsPage.security.resetSent)} className="text-sm font-medium text-blue-600 hover:underline">
              {dict.settingsPage.security.forgotPass}
            </button>
          </div>
          
          {passMsg && <p className="text-sm text-green-600 flex items-center gap-1 mt-2"><CheckCircle2 className="h-4 w-4"/> {passMsg}</p>}
          {passError && <p className="text-sm text-red-500 flex items-center gap-1 mt-2"><AlertCircle className="h-4 w-4"/> {passError}</p>}
        </form>
      </div>
      
    </div>
  );

  if (user.role === 'admin') {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
        <AdminHeader />
        <main className="flex-1 p-4 sm:p-8">
          <div className="mb-4">
             <Link href="/admin/questions" className="text-sm text-blue-600 font-medium hover:underline">{dict.settingsPage.admin.back}</Link>
          </div>
          {pageContent}
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f8fafc] dark:bg-slate-950 font-sans">
      <DashboardSidebar />
      <main className="flex-1 px-4 py-4 pb-24 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:pb-8 overflow-y-auto h-screen">
        <DashboardHeader />
        {pageContent}
      </main>
    </div>
  );
}
