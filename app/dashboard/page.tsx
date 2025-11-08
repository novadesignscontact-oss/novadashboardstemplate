import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  FolderOpen, 
  LogOut, 
  Headphones,
  ChevronDown,
  TrendingUp,
  ShoppingCart,
  Plus
} from "lucide-react";
import Image from "next/image";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex min-h-screen bg-[#F4F5FA]">
      {/* Sidebar */}
      <aside className="w-[296px] bg-white h-screen fixed left-0 top-0 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-3 px-[35px] py-[14px]">
          <div className="w-[52px] h-[52px] bg-gradient-to-br from-[#97A5EB] to-[#FFCC91] rounded-xl flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-[#45464E]">Nova</h1>
        </div>

        {/* Menu Items */}
        <nav className="mt-[62px] px-8 space-y-6">
          <div className="flex items-center gap-4 px-5 py-4 bg-[#5570F1] rounded-xl">
            <LayoutDashboard className="w-6 h-6 text-white" />
            <span className="text-white text-sm">Dashboard</span>
          </div>
          
          <div className="flex items-center gap-4 px-5 py-4">
            <ShoppingBag className="w-6 h-6 text-[#53545C]" />
            <span className="text-[#53545C] text-sm">Orders</span>
          </div>
          
          <div className="flex items-center gap-4 px-5 py-4">
            <Users className="w-6 h-6 text-[#53545C]" />
            <span className="text-[#53545C] text-sm">Customers</span>
          </div>
          
          <div className="flex items-center gap-4 px-5 py-4">
            <FolderOpen className="w-6 h-6 text-[#53545C]" />
            <span className="text-[#53545C] text-sm">Inventory</span>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto px-8 pb-10 space-y-4">
          <div className="flex items-center gap-3 px-4 py-3 bg-[#5E63661A] rounded-2xl">
            <Headphones className="w-6 h-6 text-[#1C1D22]" />
            <span className="text-[#1C1D22] text-sm">Contact Support</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-3">
            <LogOut className="w-6 h-6 text-[#CC5F5F]" />
            <span className="text-[#CC5F5F] text-sm">Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[296px] flex-1">
        {/* Top Navigation */}
        <header className="bg-white px-5 py-[14px] sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium text-[#45464E]">Dashboard</h2>
            <div className="w-8 h-8 rounded-lg bg-gray-300 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-5 space-y-5">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Sales & Volume Card */}
            <div className="bg-white rounded-xl p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="w-9 h-9 bg-[#5570F114] rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#5570F1]" />
                </div>
                <div className="flex items-center gap-2 text-xs text-[#BEC0CA]">
                  This Week <ChevronDown className="w-4 h-4" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-sm text-[#8B8D97]">Sales</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-medium text-[#45464E]">$0.00</span>
                    <span className="text-xs text-[#519C66]">+0.00%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-[#8B8D97]">Volume</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-medium text-[#45464E]">0</span>
                    <span className="text-xs text-[#519C66]">+0.00%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customers & Active Card */}
            <div className="bg-white rounded-xl p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="w-9 h-9 bg-[#FFCC9129] rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#1C1D22]" />
                </div>
                <div className="flex items-center gap-2 text-xs text-[#BEC0CA]">
                  This Week <ChevronDown className="w-4 h-4" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-sm text-[#8B8D97]">Customers</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-medium text-[#45464E]">0</span>
                    <span className="text-xs text-[#519C66]">+0.00%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-[#8B8D97]">Active</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-medium text-[#45464E]">0</span>
                    <span className="text-xs text-[#519C66]">+0.00%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders Card */}
            <div className="bg-white rounded-xl p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="w-9 h-9 bg-[#FFCC9129] rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-[#1C1D22]" />
                </div>
                <div className="flex items-center gap-2 text-xs text-[#BEC0CA]">
                  This Week <ChevronDown className="w-4 h-4" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="text-sm text-[#8B8D97]">All Orders</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-medium text-[#45464E]">0</span>
                    <span className="text-xs text-[#519C66]">+0.00%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-[#8B8D97]">Pending</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-medium text-[#45464E]">0</span>
                    <span className="text-xs text-[#519C66]">+0.00%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-[#8B8D97]">Completed</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-medium text-[#45464E]">0</span>
                    <span className="text-xs text-[#519C66]">+0.00%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Left Column - Charts */}
            <div className="lg:col-span-2 space-y-5">
              {/* Products & Cart Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* All Products Card */}
                <div className="bg-[#5570F1] rounded-xl p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-9 h-9 bg-[#FFFFFF29] rounded-lg flex items-center justify-center">
                      <FolderOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs text-[#DBDEEE]">This Week</div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <div className="text-sm text-white">All Products</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-medium text-white">0</span>
                        <span className="text-xs text-[#DBDEEE]">+0.00%</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-white">Active</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-medium text-white">0</span>
                        <span className="text-xs text-[#DBDEEE]">+0.00%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Abandoned Cart Card */}
                <div className="bg-white rounded-xl p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-9 h-9 bg-[#FFCC9129] rounded-lg flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-[#1C1D22]" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#BEC0CA]">
                      This Week <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <div className="text-sm text-[#CC5F5F]">Abandoned Cart</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-medium text-[#45464E]">0%</span>
                        <span className="text-xs text-[#519C66]">+0.00%</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-[#8B8D97]">Customers</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-medium text-[#45464E]">0</span>
                        <span className="text-xs text-[#519C66]">+0.00%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Chart */}
              <div className="bg-white rounded-xl p-5 space-y-9">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <h3 className="text-base font-medium text-[#45464E]">Summary</h3>
                    <div className="flex items-center gap-5 px-3 py-1 bg-[#5570F114] rounded-lg">
                      <span className="text-sm text-[#5570F1]">Sales</span>
                      <ChevronDown className="w-5 h-5 text-[#5570F1]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1C1D22]">
                    Last 7 Days <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Chart Area */}
                <div className="flex gap-4">
                  <div className="flex flex-col justify-between text-xs text-[#A6A8B1] py-2">
                    <div>400</div>
                    <div>300</div>
                    <div>200</div>
                    <div>100</div>
                    <div>0</div>
                  </div>
                  <div className="flex-1 flex gap-6 items-end justify-between">
                    {['Sept 10', 'Sept 11', 'Sept 12', 'Sept 13', 'Sept 14', 'Sept 15', 'Sept 16'].map((date, index) => (
                      <div key={date} className="flex flex-col items-center gap-5">
                        <div className="w-3 h-60 bg-[#EEF0FA] rounded-full relative">
                          <div 
                            className="absolute bottom-0 w-3 bg-[#5570F1] rounded-full"
                            style={{ height: `${[12, 65, 36, 79, 19, 56, 19][index]}%` }}
                          />
                        </div>
                        <div className="text-[11px] text-[#BEC0CA] whitespace-nowrap">{date}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Recent Orders */}
            <div className="bg-white rounded-xl p-5">
              <h3 className="text-base font-medium text-[#45464E] mb-40">Recent Orders</h3>
              
              {/* Empty State */}
              <div className="flex flex-col items-center text-center space-y-10">
                <div className="w-[140px] h-[140px] rounded-full border border-[#E1E2E9] bg-[#F4F5FA] flex items-center justify-center">
                  <div className="w-[60px] h-[60px] text-[#BEC0CA]">
                    <ShoppingBag className="w-full h-full" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-xl font-medium text-black">No Orders Yet?</h4>
                    <p className="text-sm text-[#8B8D97] max-w-[282px]">
                      Add products to your store and start selling to see orders here.
                    </p>
                  </div>
                  
                  <button className="flex items-center justify-center gap-5 px-4 py-4 bg-[#5570F1] text-white rounded-xl hover:bg-[#4560E0] transition-colors">
                    <Plus className="w-6 h-6" />
                    <span className="text-base">New Product</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
