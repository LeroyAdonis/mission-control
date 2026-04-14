// Mission Control V2 Data Service

export interface Task {
  id: number;
  title: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  agent: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  emoji: string;
  status: 'online' | 'offline' | 'busy' | 'idle';
  lastActive: string;
  currentTask: string;
  sessions: number;
  tokens: string;
  tasks: number;
  color: string;
  skills: string[];
  sessionHistory: SessionHistory[];
}

export interface SessionHistory {
  id: string;
  date: string;
  duration: string;
  task: string;
  status: 'completed' | 'in-progress' | 'failed';
}

export interface Activity {
  id: number;
  time: string;
  message: string;
  agent: string;
  agentEmoji: string;
  type: 'task' | 'status' | 'deployment' | 'error' | 'success';
}

export interface Project {
  name: string;
  status: 'active' | 'planning' | 'paused';
  progress: number;
  url: string;
  lastDeploy: string;
}

// NoZar Team Agents
const AGENTS: Agent[] = [
  {
    id: 'eva',
    name: 'Eva',
    role: 'Orchestrator',
    emoji: '🌹',
    status: 'online',
    lastActive: '2 min ago',
    currentTask: 'Coordinating fleet operations',
    sessions: 247,
    tokens: '2.4M',
    tasks: 18,
    color: '#00f0ff',
    skills: ['coordination', 'delegation', 'communication', 'planning'],
    sessionHistory: [
      { id: 's1', date: '2026-04-14', duration: '2h 15m', task: 'Fleet coordination', status: 'completed' },
      { id: 's2', date: '2026-04-13', duration: '1h 45m', task: 'Project review', status: 'completed' },
    ]
  },
  {
    id: 'kofi',
    name: 'Kofi',
    role: 'Coder',
    emoji: '💻',
    status: 'busy',
    lastActive: 'now',
    currentTask: 'Building Mission Control V2',
    sessions: 156,
    tokens: '1.8M',
    tasks: 67,
    color: '#39ff14',
    skills: ['typescript', 'react', 'nextjs', 'testing', 'architecture'],
    sessionHistory: [
      { id: 's3', date: '2026-04-14', duration: '3h 30m', task: 'Mission Control V2', status: 'in-progress' },
      { id: 's4', date: '2026-04-13', duration: '4h 15m', task: 'API integration', status: 'completed' },
    ]
  },
  {
    id: 'zuri',
    name: 'Zuri',
    role: 'FastCoder',
    emoji: '⚡',
    status: 'online',
    lastActive: '5 min ago',
    currentTask: 'Quick fixes and hot-patches',
    sessions: 89,
    tokens: '890K',
    tasks: 45,
    color: '#ffb800',
    skills: ['quick-fixes', 'refactoring', 'debugging', 'config'],
    sessionHistory: [
      { id: 's5', date: '2026-04-14', duration: '45m', task: 'Bug fixes', status: 'completed' },
      { id: 's6', date: '2026-04-14', duration: '30m', task: 'Config updates', status: 'completed' },
    ]
  },
  {
    id: 'amara',
    name: 'Amara',
    role: 'Planner',
    emoji: '📋',
    status: 'online',
    lastActive: '10 min ago',
    currentTask: 'Strategic roadmap Q2',
    sessions: 28,
    tokens: '310K',
    tasks: 8,
    color: '#ff00aa',
    skills: ['strategy', 'roadmaps', 'analysis', 'documentation'],
    sessionHistory: [
      { id: 's7', date: '2026-04-14', duration: '1h 20m', task: 'Q2 roadmap', status: 'in-progress' },
    ]
  },
  {
    id: 'naledi',
    name: 'Naledi',
    role: 'Design Expert',
    emoji: '🎨',
    status: 'online',
    lastActive: '8 min ago',
    currentTask: 'Dashboard UI redesign',
    sessions: 34,
    tokens: '420K',
    tasks: 12,
    color: '#a855f7',
    skills: ['ui-design', 'ux', 'figma', 'prototypes', 'design-systems'],
    sessionHistory: [
      { id: 's8', date: '2026-04-14', duration: '2h 45m', task: 'UI redesign', status: 'in-progress' },
    ]
  },
  {
    id: 'thabo',
    name: 'Thabo',
    role: 'WebApp Testing',
    emoji: '🔍',
    status: 'online',
    lastActive: '15 min ago',
    currentTask: 'E2E test suite expansion',
    sessions: 45,
    tokens: '560K',
    tasks: 23,
    color: '#ff3366',
    skills: ['playwright', 'testing', 'qa', 'automation', 'e2e'],
    sessionHistory: [
      { id: 's9', date: '2026-04-14', duration: '1h 50m', task: 'Test expansion', status: 'in-progress' },
    ]
  },
  {
    id: 'lebo',
    name: 'Lebo',
    role: 'Content Writer',
    emoji: '✍️',
    status: 'idle',
    lastActive: '1 hour ago',
    currentTask: 'Awaiting assignment',
    sessions: 22,
    tokens: '180K',
    tasks: 9,
    color: '#22c55e',
    skills: ['documentation', 'blog-posts', 'tutorials', 'copywriting'],
    sessionHistory: [
      { id: 's10', date: '2026-04-13', duration: '2h', task: 'Blog content', status: 'completed' },
    ]
  },
  {
    id: 'kaya',
    name: 'Kaya',
    role: 'Mobile Dev',
    emoji: '📱',
    status: 'online',
    lastActive: '3 min ago',
    currentTask: 'React Native optimization',
    sessions: 38,
    tokens: '480K',
    tasks: 15,
    color: '#f97316',
    skills: ['react-native', 'ios', 'android', 'mobile-ux', 'expo'],
    sessionHistory: [
      { id: 's11', date: '2026-04-14', duration: '3h', task: 'Mobile optimization', status: 'in-progress' },
    ]
  },
  {
    id: 'sipho',
    name: 'Sipho',
    role: 'DevOps',
    emoji: '🔧',
    status: 'online',
    lastActive: '5 min ago',
    currentTask: 'CI/CD pipeline improvements',
    sessions: 52,
    tokens: '620K',
    tasks: 19,
    color: '#06b6d4',
    skills: ['docker', 'kubernetes', 'ci-cd', 'monitoring', 'aws'],
    sessionHistory: [
      { id: 's12', date: '2026-04-14', duration: '2h 30m', task: 'Pipeline improvements', status: 'in-progress' },
    ]
  },
];

// Recent Activities
const ACTIVITIES: Activity[] = [
  { id: 1, time: '15:42', message: 'Mission Control V2 build started', agent: 'Kofi', agentEmoji: '💻', type: 'task' },
  { id: 2, time: '15:38', message: 'Dashboard UI redesign approved', agent: 'Naledi', agentEmoji: '🎨', type: 'success' },
  { id: 3, time: '15:35', message: 'E2E tests passing (24/24)', agent: 'Thabo', agentEmoji: '🔍', type: 'success' },
  { id: 4, time: '15:30', message: 'Deployed to Vercel preview', agent: 'Sipho', agentEmoji: '🔧', type: 'deployment' },
  { id: 5, time: '15:25', message: 'Quick fix: auth token refresh', agent: 'Zuri', agentEmoji: '⚡', type: 'task' },
  { id: 6, time: '15:20', message: 'Mobile app build completed', agent: 'Kaya', agentEmoji: '📱', type: 'success' },
  { id: 7, time: '15:15', message: 'Q2 roadmap draft ready', agent: 'Amara', agentEmoji: '📋', type: 'task' },
  { id: 8, time: '15:10', message: 'Fleet status: all agents online', agent: 'Eva', agentEmoji: '🌹', type: 'status' },
  { id: 9, time: '15:05', message: 'Blog content finalized', agent: 'Lebo', agentEmoji: '✍️', type: 'success' },
  { id: 10, time: '15:00', message: 'CI pipeline optimized', agent: 'Sipho', agentEmoji: '🔧', type: 'success' },
];

// Tasks
const DEFAULT_TASKS: Task[] = [
  { id: 1001, title: 'Complete Mission Control V2 UI', status: 'in-progress', agent: 'Kofi', priority: 'high' },
  { id: 1002, title: 'Review dashboard design specs', status: 'done', agent: 'Naledi', priority: 'high' },
  { id: 1003, title: 'Expand E2E test coverage', status: 'in-progress', agent: 'Thabo', priority: 'medium' },
  { id: 1004, title: 'Mobile app performance audit', status: 'todo', agent: 'Kaya', priority: 'medium' },
  { id: 1005, title: 'Finalize Q2 roadmap', status: 'in-progress', agent: 'Amara', priority: 'high' },
  { id: 1006, title: 'Documentation update', status: 'todo', agent: 'Lebo', priority: 'low' },
  { id: 1007, title: 'CI/CD pipeline optimization', status: 'done', agent: 'Sipho', priority: 'medium' },
  { id: 1008, title: 'Auth flow bug fixes', status: 'done', agent: 'Zuri', priority: 'high' },
];

// Projects
const PROJECTS: Project[] = [
  { name: 'Mission Control V2', status: 'active', progress: 65, url: 'https://mission-control-v2.vercel.app', lastDeploy: '15 min ago' },
  { name: 'Purple Glow Social', status: 'active', progress: 75, url: 'https://purple-glow-social-2-0.vercel.app', lastDeploy: '2 hours ago' },
  { name: 'Aliento Medical', status: 'active', progress: 60, url: 'https://alientomd.com', lastDeploy: '1 day ago' },
  { name: 'KitFix 2.0', status: 'planning', progress: 45, url: '', lastDeploy: 'N/A' },
];

// Service layer
export const dataService = {
  // ---- Agents ----
  getAgents(): Agent[] {
    return AGENTS;
  },

  getAgent(id: string): Agent | undefined {
    return AGENTS.find(a => a.id === id);
  },

  // ---- Tasks ----
  getTasks(): Task[] {
    if (typeof window === 'undefined') return DEFAULT_TASKS;
    const stored = localStorage.getItem('mc-tasks');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch { /* fall through */ }
    }
    return DEFAULT_TASKS;
  },

  saveTasks(tasks: Task[]) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mc-tasks', JSON.stringify(tasks));
    }
  },

  // ---- Activities ----
  getActivities(): Activity[] {
    return ACTIVITIES;
  },

  // ---- Projects ----
  getProjects(): Project[] {
    return PROJECTS;
  },

  // ---- Stats ----
  getStats() {
    const agents = AGENTS;
    const tasks = this.getTasks();
    return {
      totalAgents: agents.length,
      activeAgents: agents.filter(a => a.status === 'online' || a.status === 'busy').length,
      activeTasks: tasks.filter(t => t.status === 'in-progress').length,
      completedToday: tasks.filter(t => t.status === 'done').length,
      blockers: tasks.filter(t => t.priority === 'high' && t.status !== 'done').length,
    };
  },
};
