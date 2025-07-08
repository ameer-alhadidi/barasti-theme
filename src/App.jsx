import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Switch } from '@/components/ui/switch.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx'
import { Slider } from '@/components/ui/slider.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx'
import { 
  Copy, Plus, Trash2, Download, Palette, Eye, Code, Settings, 
  Info, CheckCircle, AlertCircle, User, Mail, Phone, Calendar,
  Star, Heart, Bookmark, Share2, Filter, Search, Bell, Moon, Sun,
  Layers, Zap, Sparkles
} from 'lucide-react'
import MaterialComponents from './components/MaterialComponents.jsx'
import logo from './assets/logo.jpg'
import './App.css'

function App() {
  const [palettes, setPalettes] = useState([
    {
      id: 1,
      name: 'Brand Colors',
      colors: [
        { name: 'primary', value: '#F1C40F', description: 'Main brand color' },
        { name: 'secondary', value: '#2C3E50', description: 'Dark background' },
        { name: 'accent', value: '#FFFFFF', description: 'Light accent' },
        { name: 'neutral', value: '#95A5A6', description: 'Neutral gray' },
        { name: 'success', value: '#27AE60', description: 'Success state' }
      ]
    }
  ])
  
  const [currentPalette, setCurrentPalette] = useState(0)
  const [newColorName, setNewColorName] = useState('')
  const [newColorValue, setNewColorValue] = useState('#000000')
  const [newColorDescription, setNewColorDescription] = useState('')
  const [newPaletteName, setNewPaletteName] = useState('')
  const [copySuccess, setCopySuccess] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [colorFormat, setColorFormat] = useState('hex')
  const [exportFormat, setExportFormat] = useState('tailwind')
  const [opacity, setOpacity] = useState([100])
  const [progress, setProgress] = useState(75)
  const [selectedCategories, setSelectedCategories] = useState(['ui', 'brand'])
  const [activeTab, setActiveTab] = useState('palette')

  const addColor = () => {
    if (!newColorName.trim()) return
    
    const updatedPalettes = [...palettes]
    updatedPalettes[currentPalette].colors.push({
      name: newColorName.toLowerCase().replace(/\s+/g, '-'),
      value: newColorValue,
      description: newColorDescription || `${newColorName} color`
    })
    setPalettes(updatedPalettes)
    setNewColorName('')
    setNewColorValue('#000000')
    setNewColorDescription('')
  }

  const removeColor = (colorIndex) => {
    const updatedPalettes = [...palettes]
    updatedPalettes[currentPalette].colors.splice(colorIndex, 1)
    setPalettes(updatedPalettes)
  }

  const updateColor = (colorIndex, field, value) => {
    const updatedPalettes = [...palettes]
    updatedPalettes[currentPalette].colors[colorIndex][field] = value
    setPalettes(updatedPalettes)
  }

  const addPalette = () => {
    if (!newPaletteName.trim()) return
    
    const newPalette = {
      id: Date.now(),
      name: newPaletteName,
      colors: []
    }
    setPalettes([...palettes, newPalette])
    setCurrentPalette(palettes.length)
    setNewPaletteName('')
  }

  const removePalette = (paletteIndex) => {
    if (palettes.length <= 1) return
    
    const updatedPalettes = palettes.filter((_, index) => index !== paletteIndex)
    setPalettes(updatedPalettes)
    setCurrentPalette(Math.max(0, currentPalette - 1))
  }

  const generateTailwindConfig = () => {
    const palette = palettes[currentPalette]
    const colors = {}
    
    palette.colors.forEach(color => {
      colors[color.name] = color.value
    })

    const config = {
      theme: {
        extend: {
          colors: colors
        }
      }
    }

    return JSON.stringify(config, null, 2)
  }

  const generateCSSVariables = () => {
    const palette = palettes[currentPalette]
    let css = ':root {\n'
    
    palette.colors.forEach(color => {
      css += `  --color-${color.name}: ${color.value};\n`
    })
    
    css += '}'
    return css
  }

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(`${type} copied to clipboard!`)
      setTimeout(() => setCopySuccess(''), 2000)
    } catch (err) {
      setCopySuccess('Failed to copy')
      setTimeout(() => setCopySuccess(''), 2000)
    }
  }

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  const getContrastColor = (hexColor) => {
    const rgb = hexToRgb(hexColor)
    if (!rgb) return '#000000'
    
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
    return brightness > 128 ? '#000000' : '#FFFFFF'
  }

  useEffect(() => {
    const timer = setTimeout(() => setProgress(85), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-slate-100'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header with Enhanced Components */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={logo} alt="Logo" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                Material Web Components Showcase
                <Badge variant="secondary" className="text-xs">
                  v3.0
                </Badge>
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Complete Material Design component library with your custom colors
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
              <Moon className="h-4 w-4" />
            </div>
            
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-1" />
              {notifications && <Badge className="w-2 h-2 p-0 bg-red-500" />}
            </Button>
            
            <Badge variant="secondary" className="text-sm">
              <Palette className="w-4 h-4 mr-1" />
              {palettes.length} Palette{palettes.length !== 1 ? 's' : ''}
            </Badge>
          </div>
        </div>

        {/* Success/Alert Messages */}
        {copySuccess && (
          <Alert className="mb-4">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>{copySuccess}</AlertDescription>
          </Alert>
        )}

        {/* Main Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="palette" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Color Palette
            </TabsTrigger>
            <TabsTrigger value="components" className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Material Components
            </TabsTrigger>
            <TabsTrigger value="export" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Export & Code
            </TabsTrigger>
          </TabsList>

          {/* Color Palette Tab */}
          <TabsContent value="palette">
            {/* Progress Indicator */}
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Project Progress
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">{progress}%</span>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={progress} className="w-full" />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Settings Panel */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Settings
                    </CardTitle>
                    <CardDescription>
                      Configure your workspace
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Form Components Showcase */}
                    <div className="space-y-3">
                      <Label>Color Format</Label>
                      <Select value={colorFormat} onValueChange={setColorFormat}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hex">HEX (#FF0000)</SelectItem>
                          <SelectItem value="rgb">RGB (255, 0, 0)</SelectItem>
                          <SelectItem value="hsl">HSL (0, 100%, 50%)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>Export Format</Label>
                      <RadioGroup value={exportFormat} onValueChange={setExportFormat}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="tailwind" id="tailwind" />
                          <Label htmlFor="tailwind">Tailwind CSS</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="css" id="css" />
                          <Label htmlFor="css">CSS Variables</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="scss" id="scss" />
                          <Label htmlFor="scss">SCSS Variables</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label>Opacity: {opacity[0]}%</Label>
                      <Slider
                        value={opacity}
                        onValueChange={setOpacity}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Categories</Label>
                      <div className="space-y-2">
                        {['ui', 'brand', 'semantic', 'accessibility'].map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={category}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedCategories([...selectedCategories, category])
                                } else {
                                  setSelectedCategories(selectedCategories.filter(c => c !== category))
                                }
                              }}
                            />
                            <Label htmlFor={category} className="capitalize">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <Label htmlFor="notifications">Notifications</Label>
                      <Switch
                        id="notifications"
                        checked={notifications}
                        onCheckedChange={setNotifications}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* User Profile Card */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="/api/placeholder/40/40" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">John Designer</p>
                        <p className="text-sm text-muted-foreground">UI/UX Designer</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="w-4 h-4" />
                        <span>john@example.com</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="w-4 h-4" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Joined Dec 2023</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Heart className="w-4 h-4 mr-1" />
                        Like
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Palette Management */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Palette Management</span>
                      <div className="flex space-x-2">
                        {palettes.map((palette, index) => (
                          <Button
                            key={palette.id}
                            variant={index === currentPalette ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPalette(index)}
                            className="relative"
                          >
                            {palette.name}
                            {palettes.length > 1 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  removePalette(index)
                                }}
                                className="ml-2 text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            )}
                          </Button>
                        ))}
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Manage your color palettes and individual colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Enhanced Add New Palette */}
                    <div className="flex space-x-2">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="New palette name"
                          value={newPaletteName}
                          onChange={(e) => setNewPaletteName(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Button onClick={addPalette} disabled={!newPaletteName.trim()}>
                        <Plus className="w-4 h-4 mr-1" />
                        Add Palette
                      </Button>
                      <Button variant="outline" size="icon">
                        <Filter className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Current Palette Colors */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          {palettes[currentPalette]?.name} Colors
                        </h3>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Bookmark className="w-4 h-4 mr-1" />
                            Save
                          </Button>
                          <Button variant="outline" size="sm">
                            <Star className="w-4 h-4 mr-1" />
                            Favorite
                          </Button>
                        </div>
                      </div>
                      
                      {palettes[currentPalette]?.colors.map((color, index) => (
                        <Card key={index} className="p-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className="w-12 h-12 rounded-lg border-2 border-slate-300 shadow-sm"
                              style={{ backgroundColor: color.value }}
                            />
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div className="space-y-1">
                                <Label className="text-xs">Name</Label>
                                <Input
                                  value={color.name}
                                  onChange={(e) => updateColor(index, 'name', e.target.value)}
                                  placeholder="Color name"
                                />
                              </div>
                              <div className="space-y-1">
                                <Label className="text-xs">Color</Label>
                                <Input
                                  type="color"
                                  value={color.value}
                                  onChange={(e) => updateColor(index, 'value', e.target.value)}
                                  className="h-10"
                                />
                              </div>
                              <div className="space-y-1">
                                <Label className="text-xs">Description</Label>
                                <Input
                                  value={color.description}
                                  onChange={(e) => updateColor(index, 'description', e.target.value)}
                                  placeholder="Description"
                                />
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeColor(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </Card>
                      ))}

                      {/* Enhanced Add New Color */}
                      <Card className="p-4 border-2 border-dashed border-slate-300">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-12 h-12 rounded-lg border-2 border-slate-300"
                            style={{ backgroundColor: newColorValue }}
                          />
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div className="space-y-1">
                              <Label className="text-xs">Name</Label>
                              <Input
                                placeholder="Color name"
                                value={newColorName}
                                onChange={(e) => setNewColorName(e.target.value)}
                              />
                            </div>
                            <div className="space-y-1">
                              <Label className="text-xs">Color</Label>
                              <Input
                                type="color"
                                value={newColorValue}
                                onChange={(e) => setNewColorValue(e.target.value)}
                                className="h-10"
                              />
                            </div>
                            <div className="space-y-1">
                              <Label className="text-xs">Description</Label>
                              <Input
                                placeholder="Description (optional)"
                                value={newColorDescription}
                                onChange={(e) => setNewColorDescription(e.target.value)}
                              />
                            </div>
                          </div>
                          <Button onClick={addColor} disabled={!newColorName.trim()}>
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Preview */}
              <div className="space-y-6">
                {/* Color Preview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Color Preview
                    </CardTitle>
                    <CardDescription>
                      Visual representation of your palette
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {palettes[currentPalette]?.colors.map((color, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-lg border-2 border-slate-300 shadow-sm flex items-center justify-center text-sm font-medium transition-transform hover:scale-105 cursor-pointer"
                          style={{ 
                            backgroundColor: color.value,
                            color: getContrastColor(color.value)
                          }}
                          title={`${color.name}: ${color.value}`}
                        >
                          {color.name}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Material Components Tab */}
          <TabsContent value="components">
            <div className="mb-6">
              <Alert>
                <Sparkles className="h-4 w-4" />
                <AlertTitle>Material Web Components Showcase</AlertTitle>
                <AlertDescription>
                  All components below use your custom color palette automatically. This demonstrates how your colors work across different Material Design components.
                </AlertDescription>
              </Alert>
            </div>
            <MaterialComponents colors={palettes[currentPalette]?.colors || []} />
          </TabsContent>

          {/* Export Tab */}
          <TabsContent value="export">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Export Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Export Options
                  </CardTitle>
                  <CardDescription>
                    Generate code for your projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={exportFormat} onValueChange={setExportFormat} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="tailwind">Tailwind</TabsTrigger>
                      <TabsTrigger value="css">CSS</TabsTrigger>
                      <TabsTrigger value="scss">SCSS</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="tailwind" className="space-y-3">
                      <Label>Tailwind CSS Configuration</Label>
                      <Textarea
                        value={generateTailwindConfig()}
                        readOnly
                        className="font-mono text-sm h-32"
                      />
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => copyToClipboard(generateTailwindConfig(), 'Tailwind config')}
                          className="flex-1"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Config
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="css" className="space-y-3">
                      <Label>CSS Custom Properties</Label>
                      <Textarea
                        value={generateCSSVariables()}
                        readOnly
                        className="font-mono text-sm h-32"
                      />
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => copyToClipboard(generateCSSVariables(), 'CSS variables')}
                          className="flex-1"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Variables
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="scss" className="space-y-3">
                      <Label>SCSS Variables</Label>
                      <Textarea
                        value={generateCSSVariables().replace(/--color-/g, '$').replace(/:/g, ':')}
                        readOnly
                        className="font-mono text-sm h-32"
                      />
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => copyToClipboard(generateCSSVariables().replace(/--color-/g, '$'), 'SCSS variables')}
                          className="flex-1"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy SCSS
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Usage Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    Usage Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Quick Start</AlertTitle>
                    <AlertDescription>
                      Copy the configuration and paste it into your project files.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="space-y-2">
                    <p><strong>Tailwind CSS:</strong> Add to your tailwind.config.js file</p>
                    <p><strong>CSS Variables:</strong> Include in your CSS and use with var(--color-name)</p>
                    <p><strong>SCSS:</strong> Import in your SCSS files and use as $color-name</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                    <p className="font-medium mb-1">Example Usage:</p>
                    <code className="text-xs">
                      &lt;div className="bg-primary text-secondary"&gt;<br/>
                      &nbsp;&nbsp;Hello World<br/>
                      &lt;/div&gt;
                    </code>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <p className="font-medium">Material Web Components:</p>
                    <p className="text-xs">Use CSS custom properties to theme Material Web components:</p>
                    <code className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded block">
                      --md-sys-color-primary: var(--color-primary);<br/>
                      --md-sys-color-secondary: var(--color-secondary);
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App

