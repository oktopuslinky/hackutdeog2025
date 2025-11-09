import { motion } from "framer-motion";
import { Activity, TrendingUp, Users, DollarSign, ArrowLeft, Brain, Zap } from "lucide-react";
import { GooeyButton } from "@/components/GooeyButton";

interface DashboardPageProps {
  onBack?: () => void;
}

export const DashboardPage = ({ onBack }: DashboardPageProps) => {
  const stats = [
    { icon: Activity, label: "Active Models", value: "12", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, label: "Accuracy", value: "94.2%", color: "from-green-500 to-emerald-500" },
    { icon: Users, label: "Users", value: "2.4k", color: "from-blue-500 to-cyan-500" },
    { icon: DollarSign, label: "Revenue", value: "$12.8k", color: "from-yellow-500 to-orange-500" },
  ];

  const recentActivity = [
    { icon: Brain, text: "Model GPT-4 trained successfully", time: "2 min ago", color: "text-purple-400" },
    { icon: Zap, text: "API request spike detected", time: "5 min ago", color: "text-yellow-400" },
    { icon: Activity, text: "System health check passed", time: "12 min ago", color: "text-green-400" },
    { icon: Users, text: "New user registered", time: "15 min ago", color: "text-blue-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white p-8">
      {/* Gooey Back button */}
      <div className="fixed top-8 left-8 z-50 pointer-events-none">
        <GooeyButton 
          label="Back" 
          icon={ArrowLeft}
          variant="compact"
          onClick={onBack}
          initialAnimation={{ y: 0, x: -100, opacity: 0 }}
        />
      </div>

      <div className="max-w-7xl mx-auto pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mb-2">
            Dashboard
          </h1>
          <p className="text-purple-300/60 text-lg">Welcome back to Wimsical AI</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`} />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-purple-300/60 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-2 bg-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-6 text-white">Performance Overview</h2>
            <div className="h-64 flex items-end justify-around gap-4">
              {[65, 82, 74, 91, 88, 79, 95].map((height, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-purple-600 to-pink-500 rounded-t-lg relative group cursor-pointer"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                  whileHover={{ opacity: 0.8 }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                    {height}%
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-around mt-4 text-sm text-purple-300/60">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-6 text-white">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-500/5 transition-colors duration-300"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center flex-shrink-0 ${activity.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/80 mb-1">{activity.text}</p>
                      <p className="text-xs text-purple-300/40">{activity.time}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

