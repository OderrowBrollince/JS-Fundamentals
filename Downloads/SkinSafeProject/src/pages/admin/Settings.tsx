import React, { useState } from 'react';
import { User, Mail, Lock, Bell, Shield, Save, CheckCircle } from 'lucide-react';
import { Button } from '../../components/Button';
import { FormField } from '../../components/FormField';

export function Settings() {
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications'>('profile');
  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@skinsafe.com',
    phone: '+1 (555) 123-4567',
    role: 'System Administrator'
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailReports: true,
    emailVerifications: false,
    emailProducts: true,
    emailSecurity: true
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.id]: e.target.value
    });
  };

  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityData({
      ...securityData,
      [e.target.id]: e.target.value
    });
  };

  const handleNotificationToggle = (key: keyof typeof notificationSettings) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: !notificationSettings[key]
    });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'profile' as const, label: 'Profile', icon: User },
    { id: 'security' as const, label: 'Security', icon: Lock },
    { id: 'notifications' as const, label: 'Notifications', icon: Bell }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-gray-900">Settings</h2>
              <p className="text-gray-600">Manage your account settings and preferences</p>
            </div>
          </div>

          {/* Success Message */}
          {saved && (
            <div className="mb-6 p-4 bg-secondary-50 border border-secondary-200 rounded-xl flex items-center gap-3 text-secondary-700 animate-scaleIn">
              <CheckCircle size={20} />
              <span>Settings saved successfully!</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Tabs - Sidebar on desktop, horizontal on mobile */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-2 flex lg:flex-col gap-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-md p-8">
                {activeTab === 'profile' && (
                  <div>
                    <h4 className="text-gray-900 mb-6">Profile Information</h4>
                    
                    {/* Profile Picture */}
                    <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                        <User className="text-white" size={32} />
                      </div>
                      <div>
                        <h6 className="text-gray-900 mb-2">{profileData.name}</h6>
                        <p className="text-sm text-gray-600 mb-3">{profileData.role}</p>
                        <Button size="sm" variant="ghost">Change Photo</Button>
                      </div>
                    </div>

                    <FormField
                      label="Full Name"
                      id="name"
                      value={profileData.name}
                      onChange={handleProfileChange}
                    />

                    <FormField
                      label="Email Address"
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                    />

                    <FormField
                      label="Phone Number"
                      id="phone"
                      type="tel"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                    />

                    <FormField
                      label="Role"
                      id="role"
                      value={profileData.role}
                      onChange={handleProfileChange}
                      disabled
                    />

                    <Button onClick={handleSave} size="lg">
                      <Save size={20} />
                      Save Changes
                    </Button>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div>
                    <h4 className="text-gray-900 mb-6">Security Settings</h4>
                    
                    {/* Two-Factor Authentication */}
                    <div className="mb-8 pb-8 border-b border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Shield size={24} />
                        </div>
                        <div className="flex-1">
                          <h6 className="text-gray-900 mb-2">Two-Factor Authentication</h6>
                          <p className="text-gray-600 mb-4">
                            Add an extra layer of security to your account
                          </p>
                          <Button variant="secondary" size="sm">Enable 2FA</Button>
                        </div>
                      </div>
                    </div>

                    {/* Change Password */}
                    <h5 className="text-gray-900 mb-4">Change Password</h5>

                    <FormField
                      label="Current Password"
                      id="currentPassword"
                      type="password"
                      placeholder="Enter current password"
                      value={securityData.currentPassword}
                      onChange={handleSecurityChange}
                    />

                    <FormField
                      label="New Password"
                      id="newPassword"
                      type="password"
                      placeholder="Enter new password"
                      value={securityData.newPassword}
                      onChange={handleSecurityChange}
                    />

                    <FormField
                      label="Confirm New Password"
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm new password"
                      value={securityData.confirmPassword}
                      onChange={handleSecurityChange}
                    />

                    <Button onClick={handleSave} size="lg">
                      <Lock size={20} />
                      Update Password
                    </Button>
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div>
                    <h4 className="text-gray-900 mb-6">Notification Preferences</h4>
                    <p className="text-gray-600 mb-6">
                      Choose what notifications you want to receive
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-start gap-3">
                          <Mail className="text-primary-600 mt-1" size={20} />
                          <div>
                            <h6 className="text-gray-900 mb-1">New Reports</h6>
                            <p className="text-sm text-gray-600">
                              Get notified when users submit new product reports
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNotificationToggle('emailReports')}
                          className={`w-12 h-6 rounded-full transition-colors relative ${
                            notificationSettings.emailReports ? 'bg-secondary-600' : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                              notificationSettings.emailReports ? 'translate-x-6' : 'translate-x-0.5'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-start gap-3">
                          <Bell className="text-primary-600 mt-1" size={20} />
                          <div>
                            <h6 className="text-gray-900 mb-1">Verification Alerts</h6>
                            <p className="text-sm text-gray-600">
                              Receive alerts for failed verification attempts
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNotificationToggle('emailVerifications')}
                          className={`w-12 h-6 rounded-full transition-colors relative ${
                            notificationSettings.emailVerifications ? 'bg-secondary-600' : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                              notificationSettings.emailVerifications ? 'translate-x-6' : 'translate-x-0.5'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-start gap-3">
                          <Shield className="text-primary-600 mt-1" size={20} />
                          <div>
                            <h6 className="text-gray-900 mb-1">Product Updates</h6>
                            <p className="text-sm text-gray-600">
                              Get notified when new products are registered
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNotificationToggle('emailProducts')}
                          className={`w-12 h-6 rounded-full transition-colors relative ${
                            notificationSettings.emailProducts ? 'bg-secondary-600' : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                              notificationSettings.emailProducts ? 'translate-x-6' : 'translate-x-0.5'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-start gap-3">
                          <Lock className="text-primary-600 mt-1" size={20} />
                          <div>
                            <h6 className="text-gray-900 mb-1">Security Alerts</h6>
                            <p className="text-sm text-gray-600">
                              Important security notifications and login alerts
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNotificationToggle('emailSecurity')}
                          className={`w-12 h-6 rounded-full transition-colors relative ${
                            notificationSettings.emailSecurity ? 'bg-secondary-600' : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                              notificationSettings.emailSecurity ? 'translate-x-6' : 'translate-x-0.5'
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button onClick={handleSave} size="lg">
                        <Save size={20} />
                        Save Preferences
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
