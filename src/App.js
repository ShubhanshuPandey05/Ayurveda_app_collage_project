import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserProfile } from './components/UserProfile';
import { PrakritiAnalysis } from './components/PrakritiAnalysis';
import { DietChart } from './components/DietChart';
import { DailySchedule } from './components/DailySchedule';
import { Home } from './components/Home';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { User, Brain, Utensils, Clock, Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: null },
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/prakriti', label: 'Prakriti', icon: Brain },
    { path: '/diet', label: 'Diet', icon: Utensils },
    { path: '/schedule', label: 'Schedule', icon: Clock },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        {/* Navigation Header */}
        <nav className="bg-white shadow-sm border-b relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <h1 className="text-xl sm:text-2xl font-bold text-green-700">🌿 Ayurvedic Wellness</h1>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path}>
                    <Button 
                      variant="ghost" 
                      className="text-green-700 hover:text-green-800 text-sm lg:text-base"
                    >
                      {item.icon && <item.icon className="w-4 h-4 mr-1 lg:mr-2" />}
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <Button
                  variant="ghost"
                  onClick={toggleMobileMenu}
                  className="text-green-700 hover:text-green-800 p-2"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-green-800 hover:bg-green-50 transition-colors"
                    >
                      <div className="flex items-center">
                        {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/prakriti" element={<PrakritiAnalysis />} />
            <Route path="/diet" element={<DietChart />} />
            <Route path="/schedule" element={<DailySchedule />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 