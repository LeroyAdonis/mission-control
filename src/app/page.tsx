'use client';

import { useState, useEffect } from 'react';
import { dataService, Agent, Activity, Project } from '@/lib/data-service';

// Agent Card Component
function AgentCard({ agent, onClick }: { agent: Agent; onClick: () => void }) {
  const statusColors = {
    online: 'bg-green-400',
    offline: 'bg-gray-500',
    busy: 'bg-amber-400',
    idle: 'bg-cyan-400',
  };

  const statusGlow = {
    online: 'shadow-[0_0_10px_#39ff14]',
    offline: '',
    busy: 'shadow-[0_0_10px_#ffb800]',
    idle: 'shadow-[0_0_10px_#00f0ff]',
  };

  return (
    <div
      onClick={onClick}
      className="card-crt p-4 rounded-lg cursor-pointer hover:scale-[1.02] transition-all duration-300 group"
      style={{ borderColor: agent.color }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-3xl">{agent.emoji}</div>
        <div className={`w-3 h-3 rounded-full ${statusColors[agent.status]} ${statusGlow[agent.status]} animate-pulse`} />
      </div>
      
      <div className="space-y-1">
        <h3 className="text-lg font-bold" style={{ color: agent.color }}>
          {agent.name}
        </h3>
        <p className="text-xs text-gray-400 uppercase tracking-wider">{agent.role}</p>
        <p className="text-xs text-gray-500 truncate mt-2">
          {agent.currentTask}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-600 mt-3 pt-2 border-t border-gray-800">
          <span>Last: {agent.lastActive}</span>
          <span>{agent.tasks} tasks</span>
        </div>
      </div>

      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
        style={{ 
          background: `linear-gradient(135deg, ${agent.color}10 0%, transparent 50%)`,
          boxShadow: `0 0 20px ${agent.color}40, inset 0 0 20px ${agent.color}10`
        }}
      />
    </div>
  );
}

// Stats Bar Component
function StatsBar() {
  const stats = dataService.getStats();
  
  const statItems = [
    { label: 'Total Agents', value: stats.totalAgents, color: 'text-cyan-400', border: 'border-cyan-400' },
    { label: 'Active', value: stats.activeAgents, color: 'text-green-400', border: 'border-green-400' },
    { label: 'In Progress', value: stats.activeTasks, color: 'text-amber-400', border: 'border-amber-400' },
    { label: 'Completed', value: stats.completedToday, color: 'text-magenta-400', border: 'border-[#ff00aa]' },
    { label: 'Blockers', value: stats.blockers, color: 'text-red-400', border: 'border-red-400' },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-[#0d0d14] border-b border-gray-800">
      {statItems.map((stat, i) => (
        <div 
          key={i}
          className={`flex-1 min-w-[120px] p-3 border-l-2 ${stat.border} bg-[#12121a]`}
        >
          <div className={`text-2xl font-bold ${stat.color}`}>
            {stat.value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// Activity Feed Component
function ActivityFeed({ activities }: { activities: Activity[] }) {
  const typeStyles = {
    task: 'border-cyan-400',
    status: 'border-green-400',
    deployment: 'border-amber-400',
    error: 'border-red-400',
    success: 'border-magenta-400',
  };

  return (
    <div className="bg-[#0d0d14] border border-gray-800 rounded-lg overflow-hidden">
      <div className="p-3 border-b border-gray-800 bg-[#12121a]">
        <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          &gt; Recent Activity
        </h2>
      </div>
      <div className="divide-y divide-gray-800 max-h-[400px] overflow-y-auto">
        {activities.map((activity) => (
          <div 
            key={activity.id}
            className={`flex items-start gap-3 p-3 border-l-2 ${typeStyles[activity.type]} hover:bg-[#1a1a25] transition-colors`}
          >
            <span className="text-lg">{activity.agentEmoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-300 truncate">{activity.message}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-500">{activity.time}</span>
                <span className="text-xs text-gray-600">•</span>
                <span className="text-xs text-gray-500">{activity.agent}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Agent Detail Panel (Slide-out)
function AgentDetailPanel({ 
  agent, 
  onClose 
}: { 
  agent: Agent | null; 
  onClose: () => void;
}) {
  if (!agent) return null;

  const statusColors = {
    online: 'bg-green-400 text-green-400',
    offline: 'bg-gray-500 text-gray-500',
    busy: 'bg-amber-400 text-amber-400',
    idle: 'bg-cyan-400 text-cyan-400',
  };

  return (
    <div 
      className="fixed inset-y-0 right-0 w-[400px] bg-[#0d0d14] border-l border-cyan-400/30 shadow-[0_0_30px_rgba(0,240,255,0.2)] z-50 animate-[slideIn_0.3s_ease-out]"
      style={{ boxShadow: `0 0 30px ${agent.color}30` }}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-cyan-400 transition-colors"
        >
          ✕
        </button>
        <div className="flex items-center gap-4">
          <div className="text-5xl">{agent.emoji}</div>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: agent.color }}>
              {agent.name}
            </h2>
            <p className="text-sm text-gray-400 uppercase tracking-wider">{agent.role}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className={`w-2 h-2 rounded-full ${statusColors[agent.status].split(' ')[0]} animate-pulse`} />
              <span className={`text-xs uppercase ${statusColors[agent.status].split(' ')[1]}`}>
                {agent.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Current Task */}
      <div className="p-6 border-b border-gray-800">
        <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Current Task</h3>
        <p className="text-sm text-gray-300">{agent.currentTask}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-800">
        <div>
          <div className="text-2xl font-bold text-cyan-400">{agent.sessions}</div>
          <div className="text-xs text-gray-500">Sessions</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-amber-400">{agent.tokens}</div>
          <div className="text-xs text-gray-500">Tokens</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-magenta-400">{agent.tasks}</div>
          <div className="text-xs text-gray-500">Tasks</div>
        </div>
      </div>

      {/* Skills */}
      <div className="p-6 border-b border-gray-800">
        <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {agent.skills.map((skill, i) => (
            <span 
              key={i}
              className="px-2 py-1 text-xs bg-[#1a1a25] rounded border border-gray-700 text-gray-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Session History */}
      <div className="p-6">
        <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Recent Sessions</h3>
        <div className="space-y-3">
          {agent.sessionHistory.map((session) => (
            <div key={session.id} className="p-3 bg-[#12121a] rounded border border-gray-800">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-300">{session.task}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  session.status === 'completed' ? 'bg-green-400/20 text-green-400' :
                  session.status === 'in-progress' ? 'bg-amber-400/20 text-amber-400' :
                  'bg-red-400/20 text-red-400'
                }`}>
                  {session.status}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span>{session.date}</span>
                <span>•</span>
                <span>{session.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Deployment Status Component
function DeploymentStatus({ projects }: { projects: Project[] }) {
  return (
    <div className="bg-[#0d0d14] border border-gray-800 rounded-lg overflow-hidden">
      <div className="p-3 border-b border-gray-800 bg-[#12121a]">
        <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400">
          &gt; Deployment Status
        </h2>
      </div>
      <div className="divide-y divide-gray-800">
        {projects.map((project, i) => (
          <div key={i} className="p-3 hover:bg-[#1a1a25] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">{project.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded uppercase ${
                project.status === 'active' ? 'bg-green-400/20 text-green-400' :
                project.status === 'planning' ? 'bg-cyan-400/20 text-cyan-400' :
                'bg-amber-400/20 text-amber-400'
              }`}>
                {project.status}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-amber-400 transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 w-10">{project.progress}%</span>
            </div>
            {project.url && (
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-400 hover:text-cyan-300 mt-2 block truncate"
              >
                🔗 {project.url.replace('https://', '')}
              </a>
            )}
            <div className="text-xs text-gray-600 mt-1">
              Last deploy: {project.lastDeploy}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Navigation Component
function Navigation({ 
  activeTab, 
  onTabChange,
  currentTime
}: { 
  activeTab: string; 
  onTabChange: (tab: string) => void;
  currentTime: Date;
}) {
  const tabs = ['Overview', 'Agents', 'Tasks', 'Activity'];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0d0d14] border-b border-gray-800">
      <div className="flex items-center gap-3">
        <div className="text-2xl">🚀</div>
        <h1 className="text-xl font-bold tracking-wider">
          <span className="text-cyan-400">MISSION</span>
          <span className="text-gray-500">CONTROL</span>
          <span className="text-amber-400">V2</span>
        </h1>
      </div>
      
      <div className="flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab.toLowerCase())}
            className={`px-4 py-2 text-sm uppercase tracking-wider transition-all ${
              activeTab === tab.toLowerCase()
                ? 'text-cyan-400 border-b-2 border-cyan-400 bg-cyan-400/10'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="text-xs text-gray-500 font-mono">
          {currentTime.toLocaleTimeString('en-US', { hour12: false })}
        </div>
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#39ff14]" />
      </div>
    </nav>
  );
}

// Main Page
export default function MissionControl() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const agents = dataService.getAgents();
  const activities = dataService.getActivities();
  const projects = dataService.getProjects();
  const stats = dataService.getStats();

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} currentTime={currentTime} />

      {/* Stats Bar */}
      <StatsBar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Agent Fleet Grid */}
            <div className="lg:col-span-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                &gt; Agent Fleet Status
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {agents.map((agent) => (
                  <AgentCard 
                    key={agent.id} 
                    agent={agent} 
                    onClick={() => setSelectedAgent(agent)}
                  />
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div className="lg:col-span-1">
              <ActivityFeed activities={activities} />
            </div>

            {/* Deployment Status */}
            <div className="lg:col-span-1">
              <DeploymentStatus projects={projects} />
            </div>
          </div>
        )}

        {activeTab === 'agents' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {agents.map((agent) => (
              <AgentCard 
                key={agent.id} 
                agent={agent} 
                onClick={() => setSelectedAgent(agent)}
              />
            ))}
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* To Do Column */}
            <div className="bg-[#0d0d14] rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-[#12121a]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  To Do
                </h3>
              </div>
              <div className="p-3 space-y-3">
                {dataService.getTasks().filter(t => t.status === 'todo').map(task => (
                  <div key={task.id} className="p-3 bg-[#12121a] rounded border border-gray-700">
                    <p className="text-sm text-gray-300">{task.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        task.priority === 'high' ? 'bg-red-400/20 text-red-400' :
                        task.priority === 'medium' ? 'bg-amber-400/20 text-amber-400' :
                        'bg-gray-600/20 text-gray-400'
                      }`}>
                        {task.priority}
                      </span>
                      <span className="text-xs text-gray-500">{task.agent}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In Progress Column */}
            <div className="bg-[#0d0d14] rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-[#12121a]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                  In Progress
                </h3>
              </div>
              <div className="p-3 space-y-3">
                {dataService.getTasks().filter(t => t.status === 'in-progress').map(task => (
                  <div key={task.id} className="p-3 bg-[#12121a] rounded border border-amber-400/30">
                    <p className="text-sm text-gray-300">{task.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        task.priority === 'high' ? 'bg-red-400/20 text-red-400' :
                        task.priority === 'medium' ? 'bg-amber-400/20 text-amber-400' :
                        'bg-gray-600/20 text-gray-400'
                      }`}>
                        {task.priority}
                      </span>
                      <span className="text-xs text-gray-500">{task.agent}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Done Column */}
            <div className="bg-[#0d0d14] rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-[#12121a]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-green-400">
                  Done
                </h3>
              </div>
              <div className="p-3 space-y-3">
                {dataService.getTasks().filter(t => t.status === 'done').map(task => (
                  <div key={task.id} className="p-3 bg-[#12121a] rounded border border-green-400/30 opacity-70">
                    <p className="text-sm text-gray-400 line-through">{task.title}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{task.agent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="max-w-2xl mx-auto">
            <ActivityFeed activities={activities} />
          </div>
        )}
      </main>

      {/* Agent Detail Panel */}
      {selectedAgent && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSelectedAgent(null)}
          />
          <AgentDetailPanel 
            agent={selectedAgent} 
            onClose={() => setSelectedAgent(null)}
          />
        </>
      )}
    </div>
  );
}
