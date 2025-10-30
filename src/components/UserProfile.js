import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectOption } from './ui/select';
import { Save, User } from 'lucide-react';

export function UserProfile() {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    sleepHours: '',
    activityLevel: '',
    occupation: '',
    stressLevel: '',
    dietaryRestrictions: '',
    healthConditions: ''
  });

  const [isSaved, setIsSaved] = useState(false);

  // Load profile data from localStorage on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Personal Profile</h1>
        <p className="text-gray-600">Tell us about yourself to get personalized recommendations</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-green-700">
            <User className="w-5 h-5 mr-2" />
            Basic Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  value={profile.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select
                  id="gender"
                  value={profile.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  required
                >
                  <SelectOption value="">Select gender</SelectOption>
                  <SelectOption value="male">Male</SelectOption>
                  <SelectOption value="female">Female</SelectOption>
                  <SelectOption value="other">Other</SelectOption>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Input
                  id="occupation"
                  value={profile.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  placeholder="Enter your occupation"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={profile.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  placeholder="Enter height in cm"
                  min="100"
                  max="250"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={profile.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  placeholder="Enter weight in kg"
                  min="20"
                  max="300"
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Health & Lifestyle</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sleepHours">Average Sleep Hours *</Label>
                  <Select
                    id="sleepHours"
                    value={profile.sleepHours}
                    onChange={(e) => handleInputChange('sleepHours', e.target.value)}
                    required
                  >
                    <SelectOption value="">Select sleep hours</SelectOption>
                    <SelectOption value="less-than-6">Less than 6 hours</SelectOption>
                    <SelectOption value="6-7">6-7 hours</SelectOption>
                    <SelectOption value="7-8">7-8 hours</SelectOption>
                    <SelectOption value="8-9">8-9 hours</SelectOption>
                    <SelectOption value="more-than-9">More than 9 hours</SelectOption>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="activityLevel">Activity Level *</Label>
                  <Select
                    id="activityLevel"
                    value={profile.activityLevel}
                    onChange={(e) => handleInputChange('activityLevel', e.target.value)}
                    required
                  >
                    <SelectOption value="">Select activity level</SelectOption>
                    <SelectOption value="sedentary">Sedentary (little or no exercise)</SelectOption>
                    <SelectOption value="lightly-active">Lightly Active (light exercise 1-3 days/week)</SelectOption>
                    <SelectOption value="moderately-active">Moderately Active (moderate exercise 3-5 days/week)</SelectOption>
                    <SelectOption value="very-active">Very Active (hard exercise 6-7 days/week)</SelectOption>
                    <SelectOption value="extremely-active">Extremely Active (very hard exercise, physical job)</SelectOption>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stressLevel">Stress Level</Label>
                  <Select
                    id="stressLevel"
                    value={profile.stressLevel}
                    onChange={(e) => handleInputChange('stressLevel', e.target.value)}
                  >
                    <SelectOption value="">Select stress level</SelectOption>
                    <SelectOption value="low">Low</SelectOption>
                    <SelectOption value="moderate">Moderate</SelectOption>
                    <SelectOption value="high">High</SelectOption>
                    <SelectOption value="very-high">Very High</SelectOption>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                  <Input
                    id="dietaryRestrictions"
                    value={profile.dietaryRestrictions}
                    onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                    placeholder="e.g., vegetarian, gluten-free, dairy-free"
                  />
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <Label htmlFor="healthConditions">Health Conditions (Optional)</Label>
                <Input
                  id="healthConditions"
                  value={profile.healthConditions}
                  onChange={(e) => handleInputChange('healthConditions', e.target.value)}
                  placeholder="Any existing health conditions or concerns"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
            </div>

            {isSaved && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Profile saved successfully!
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 