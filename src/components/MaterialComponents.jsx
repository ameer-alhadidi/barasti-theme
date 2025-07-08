import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'

// Material Web Components Showcase
// Based on: https://github.com/material-components/material-web/tree/main/docs/components

const MaterialComponents = ({ colors }) => {
  const [selectedChip, setSelectedChip] = useState('filter')
  const [switchStates, setSwitchStates] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true
  })
  const [sliderValue, setSliderValue] = useState(50)
  const [radioValue, setRadioValue] = useState('option1')
  const [checkboxStates, setCheckboxStates] = useState({
    terms: false,
    newsletter: true,
    updates: false
  })
  const [textFieldValues, setTextFieldValues] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [selectValue, setSelectValue] = useState('')
  const [tabValue, setTabValue] = useState('overview')

  const primaryColor = colors?.find(c => c.name === 'primary')?.value || '#F1C40F'
  const secondaryColor = colors?.find(c => c.name === 'secondary')?.value || '#2C3E50'
  const accentColor = colors?.find(c => c.name === 'accent')?.value || '#FFFFFF'

  const materialStyle = {
    '--md-sys-color-primary': primaryColor,
    '--md-sys-color-secondary': secondaryColor,
    '--md-sys-color-surface': accentColor,
    '--md-sys-color-on-primary': secondaryColor,
    '--md-sys-color-on-secondary': accentColor,
    '--md-sys-color-outline': '#6F7979'
  }

  return (
    <div style={materialStyle} className="space-y-6">
      {/* Buttons Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🔘 Buttons
            <Badge variant="secondary">5 Types</Badge>
          </CardTitle>
          <CardDescription>
            Material Design button variants with your custom colors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Elevated Button */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Elevated</label>
              <button 
                className="w-full px-4 py-2 rounded-full shadow-md transition-all hover:shadow-lg"
                style={{ 
                  backgroundColor: accentColor, 
                  color: secondaryColor,
                  border: `1px solid ${primaryColor}20`
                }}
              >
                Elevated
              </button>
            </div>

            {/* Filled Button */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Filled</label>
              <button 
                className="w-full px-4 py-2 rounded-full transition-all hover:opacity-90"
                style={{ 
                  backgroundColor: primaryColor, 
                  color: secondaryColor 
                }}
              >
                Filled
              </button>
            </div>

            {/* Filled Tonal Button */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Tonal</label>
              <button 
                className="w-full px-4 py-2 rounded-full transition-all hover:opacity-90"
                style={{ 
                  backgroundColor: `${primaryColor}20`, 
                  color: primaryColor 
                }}
              >
                Tonal
              </button>
            </div>

            {/* Outlined Button */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Outlined</label>
              <button 
                className="w-full px-4 py-2 rounded-full border transition-all hover:bg-opacity-10"
                style={{ 
                  borderColor: primaryColor, 
                  color: primaryColor,
                  backgroundColor: 'transparent'
                }}
              >
                Outlined
              </button>
            </div>

            {/* Text Button */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Text</label>
              <button 
                className="w-full px-4 py-2 rounded-full transition-all hover:bg-opacity-10"
                style={{ 
                  color: primaryColor,
                  backgroundColor: 'transparent'
                }}
              >
                Text
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAB (Floating Action Button) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ➕ Floating Action Button
            <Badge variant="secondary">FAB</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-center">
            <button 
              className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: primaryColor, 
                color: secondaryColor 
              }}
            >
              +
            </button>
            <button 
              className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center text-xl transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: primaryColor, 
                color: secondaryColor 
              }}
            >
              ✉
            </button>
            <button 
              className="px-6 h-14 rounded-full shadow-lg flex items-center justify-center gap-2 transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: primaryColor, 
                color: secondaryColor 
              }}
            >
              <span>+</span>
              <span>Create</span>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Icon Buttons */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🔘 Icon Buttons
            <Badge variant="secondary">Interactive</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-center">
            {['❤️', '⭐', '🔖', '📤', '⚙️', '🔍'].map((icon, index) => (
              <button 
                key={index}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-opacity-10"
                style={{ 
                  color: primaryColor,
                  backgroundColor: `${primaryColor}10`
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🏷️ Chips
            <Badge variant="secondary">Selection</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Filter Chips */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Filter Chips</label>
              <div className="flex flex-wrap gap-2">
                {['All', 'UI', 'Brand', 'Semantic', 'Accessibility'].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => setSelectedChip(chip.toLowerCase())}
                    className="px-4 py-2 rounded-full border transition-all"
                    style={{
                      backgroundColor: selectedChip === chip.toLowerCase() ? primaryColor : 'transparent',
                      color: selectedChip === chip.toLowerCase() ? secondaryColor : primaryColor,
                      borderColor: primaryColor
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Chips */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Input Chips</label>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Material Design', 'Tailwind'].map((chip) => (
                  <div
                    key={chip}
                    className="px-4 py-2 rounded-full border flex items-center gap-2"
                    style={{
                      backgroundColor: `${primaryColor}10`,
                      borderColor: primaryColor,
                      color: primaryColor
                    }}
                  >
                    <span>{chip}</span>
                    <button className="text-xs hover:bg-red-100 rounded-full w-4 h-4 flex items-center justify-center">
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Checkboxes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ☑️ Checkboxes
            <Badge variant="secondary">Selection</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(checkboxStates).map(([key, checked]) => (
              <label key={key} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setCheckboxStates(prev => ({ ...prev, [key]: e.target.checked }))}
                  className="w-5 h-5 rounded border-2 transition-all"
                  style={{
                    accentColor: primaryColor,
                    borderColor: primaryColor
                  }}
                />
                <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Radio Buttons */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🔘 Radio Buttons
            <Badge variant="secondary">Single Selection</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {['option1', 'option2', 'option3'].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="radioGroup"
                  value={option}
                  checked={radioValue === option}
                  onChange={(e) => setRadioValue(e.target.value)}
                  className="w-5 h-5"
                  style={{ accentColor: primaryColor }}
                />
                <span className="capitalize">Option {option.slice(-1)}</span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Switches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🔄 Switches
            <Badge variant="secondary">Toggle</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(switchStates).map(([key, checked]) => (
              <div key={key} className="flex items-center justify-between">
                <label className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setSwitchStates(prev => ({ ...prev, [key]: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div 
                    className="relative w-11 h-6 rounded-full peer transition-all peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
                    style={{
                      backgroundColor: checked ? primaryColor : '#ccc'
                    }}
                  ></div>
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Text Fields */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📝 Text Fields
            <Badge variant="secondary">Input</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Filled Text Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Filled Text Field</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={textFieldValues.name}
                onChange={(e) => setTextFieldValues(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-t-lg border-b-2 transition-all focus:outline-none"
                style={{
                  backgroundColor: `${primaryColor}10`,
                  borderBottomColor: primaryColor
                }}
              />
            </div>

            {/* Outlined Text Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Outlined Text Field</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={textFieldValues.email}
                onChange={(e) => setTextFieldValues(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none"
                style={{
                  borderColor: primaryColor
                }}
              />
            </div>

            {/* Textarea */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Text Area</label>
              <textarea
                placeholder="Enter your message"
                value={textFieldValues.message}
                onChange={(e) => setTextFieldValues(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none resize-none"
                style={{
                  borderColor: primaryColor
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Select */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📋 Select
            <Badge variant="secondary">Dropdown</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <select
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none"
              style={{
                borderColor: primaryColor
              }}
            >
              <option value="">Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Slider */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎚️ Slider
            <Badge variant="secondary">Range: {sliderValue}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(e.target.value)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${primaryColor} 0%, ${primaryColor} ${sliderValue}%, #ddd ${sliderValue}%, #ddd 100%)`,
                accentColor: primaryColor
              }}
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>0</span>
              <span>{sliderValue}</span>
              <span>100</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Indicators */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📊 Progress
            <Badge variant="secondary">Indicators</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Linear Progress */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Linear Progress</label>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ 
                    backgroundColor: primaryColor,
                    width: `${sliderValue}%`
                  }}
                ></div>
              </div>
            </div>

            {/* Circular Progress */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Circular Progress</label>
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full border-4 border-t-4 animate-spin"
                  style={{
                    borderColor: `${primaryColor}20`,
                    borderTopColor: primaryColor
                  }}
                ></div>
                <div 
                  className="w-12 h-12 rounded-full border-4"
                  style={{
                    borderColor: `${primaryColor}20`,
                    borderTopColor: primaryColor,
                    transform: `rotate(${(sliderValue / 100) * 360}deg)`
                  }}
                ></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📑 Tabs
            <Badge variant="secondary">Navigation</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex border-b">
              {['overview', 'details', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTabValue(tab)}
                  className="px-4 py-2 border-b-2 transition-all capitalize"
                  style={{
                    borderBottomColor: tabValue === tab ? primaryColor : 'transparent',
                    color: tabValue === tab ? primaryColor : '#666'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-4 min-h-[100px] rounded-lg" style={{ backgroundColor: `${primaryColor}05` }}>
              <p>Content for <strong>{tabValue}</strong> tab</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dividers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ➖ Dividers
            <Badge variant="secondary">Separators</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>Content above divider</div>
            <hr style={{ borderColor: primaryColor }} />
            <div>Content below divider</div>
            <div className="flex items-center gap-4">
              <div className="flex-1" style={{ borderTop: `1px solid ${primaryColor}` }}></div>
              <span className="text-sm" style={{ color: primaryColor }}>OR</span>
              <div className="flex-1" style={{ borderTop: `1px solid ${primaryColor}` }}></div>
            </div>
            <div>Content after labeled divider</div>
          </div>
        </CardContent>
      </Card>

      {/* Lists */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📋 Lists
            <Badge variant="secondary">Items</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-opacity-10 transition-all cursor-pointer"
                style={{ backgroundColor: `${primaryColor}05` }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: primaryColor }}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item}</div>
                  <div className="text-sm text-gray-500">Description for {item.toLowerCase()}</div>
                </div>
                <button 
                  className="text-sm px-3 py-1 rounded-full"
                  style={{ 
                    color: primaryColor,
                    backgroundColor: `${primaryColor}10`
                  }}
                >
                  Action
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Menu */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📋 Menu
            <Badge variant="secondary">Dropdown</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative inline-block">
            <button 
              className="px-4 py-2 rounded-lg border flex items-center gap-2"
              style={{ 
                borderColor: primaryColor,
                color: primaryColor
              }}
            >
              Menu Options
              <span>▼</span>
            </button>
            {/* Menu items would appear on click */}
            <div 
              className="mt-2 p-2 rounded-lg border shadow-lg"
              style={{ 
                borderColor: primaryColor,
                backgroundColor: accentColor
              }}
            >
              {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
                <div 
                  key={index}
                  className="px-3 py-2 rounded hover:bg-opacity-10 cursor-pointer"
                  style={{ color: primaryColor }}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ripple Effect Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            💫 Ripple Effects
            <Badge variant="secondary">Interactive</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <button 
              className="relative overflow-hidden px-6 py-3 rounded-lg transition-all active:scale-95"
              style={{ 
                backgroundColor: primaryColor,
                color: secondaryColor
              }}
            >
              Click for Ripple
            </button>
            <button 
              className="relative overflow-hidden px-6 py-3 rounded-lg border transition-all active:scale-95"
              style={{ 
                borderColor: primaryColor,
                color: primaryColor
              }}
            >
              Outlined Ripple
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Focus Ring Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎯 Focus Ring
            <Badge variant="secondary">Accessibility</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">Tab through these elements to see focus rings:</p>
            <div className="flex gap-4">
              <button 
                className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  backgroundColor: primaryColor,
                  color: secondaryColor,
                  '--tw-ring-color': primaryColor
                }}
              >
                Focusable Button
              </button>
              <input 
                type="text" 
                placeholder="Focusable Input"
                className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  borderColor: primaryColor,
                  '--tw-ring-color': primaryColor
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Elevation Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📐 Elevation
            <Badge variant="secondary">Shadows</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((level) => (
              <div 
                key={level}
                className={`p-4 rounded-lg text-center shadow-${level === 1 ? 'sm' : level === 2 ? 'md' : 'lg'}`}
                style={{ backgroundColor: accentColor }}
              >
                <div className="font-medium">Level {level}</div>
                <div className="text-sm text-gray-500">Elevation</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MaterialComponents

