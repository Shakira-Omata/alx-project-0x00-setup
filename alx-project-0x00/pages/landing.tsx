import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Property Listings</h1>
      
      {/* Button Size Variants */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
        <div className="flex gap-4 flex-wrap">
          <Button 
            title="Small Button" 
            styles="text-sm px-4 py-1 bg-blue-500 text-white rounded-md"
          />
          <Button 
            title="Medium Button" 
            styles="text-base px-6 py-2 bg-blue-500 text-white rounded-md"
          />
          <Button 
            title="Large Button" 
            styles="text-lg px-8 py-3 bg-blue-500 text-white rounded-md"
          />
        </div>
      </div>

      {/* Button Shape Variants */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Button Shapes</h2>
        <div className="flex gap-4 flex-wrap">
          <Button 
            title="Rounded SM" 
            styles="px-6 py-2 bg-green-500 text-white rounded-sm"
          />
          <Button 
            title="Rounded MD" 
            styles="px-6 py-2 bg-green-500 text-white rounded-md"
          />
          <Button 
            title="Rounded Full" 
            styles="px-6 py-2 bg-green-500 text-white rounded-full"
          />
        </div>
      </div>

      {/* Combined Variants - All sizes with different shapes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Combined Variants</h2>
        <div className="flex gap-4 flex-wrap">
          {/* Small buttons with different shapes */}
          <Button 
            title="Small Rounded SM" 
            styles="text-sm px-4 py-1 bg-purple-500 text-white rounded-sm"
          />
          <Button 
            title="Small Rounded MD" 
            styles="text-sm px-4 py-1 bg-purple-500 text-white rounded-md"
          />
          <Button 
            title="Small Rounded Full" 
            styles="text-sm px-4 py-1 bg-purple-500 text-white rounded-full"
          />
          
          {/* Medium buttons with different shapes */}
          <Button 
            title="Medium Rounded SM" 
            styles="text-base px-6 py-2 bg-indigo-500 text-white rounded-sm"
          />
          <Button 
            title="Medium Rounded MD" 
            styles="text-base px-6 py-2 bg-indigo-500 text-white rounded-md"
          />
          <Button 
            title="Medium Rounded Full" 
            styles="text-base px-6 py-2 bg-indigo-500 text-white rounded-full"
          />
          
          {/* Large buttons with different shapes */}
          <Button 
            title="Large Rounded SM" 
            styles="text-lg px-8 py-3 bg-pink-500 text-white rounded-sm"
          />
          <Button 
            title="Large Rounded MD" 
            styles="text-lg px-8 py-3 bg-pink-500 text-white rounded-md"
          />
          <Button 
            title="Large Rounded Full" 
            styles="text-lg px-8 py-3 bg-pink-500 text-white rounded-full"
          />
        </div>
      </div>

      {/* Property Cards */}
      <h2 className="text-2xl font-semibold mb-4 mt-12">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Landing;