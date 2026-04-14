export interface Task {
  id: number;
  title: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  agent: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Agent {
  name: string;
  role: string;
  status: 'online' | 'offline';
  avatar: string;
  color: string;
  model: string;
  sessions: number;
  tokens: string;
  tasks: number;
  desc: string;
}

export interface Project {
  name: string;
  status: 'active' | 'planning' | 'paused';
  progress: number;
  color: 'green' | 'cyan' | 'amber';
  tasks: number;
  memories: number;
  desc: string;
  url: string;
}

export interface Memory {
  date: string;
  preview: string;
  full: string;
}

export interface Doc {
  name: string;
  icon: string;
  size: string;
  date: string;
  filename: string;
  content: string;
}

export interface Activity {
  time: string;
  message: string;
  agent: string;
}

export interface CalEvent {
  day: number;
  title: string;
  type: 'reminder' | 'task' | 'briefing' | 'cron';
  desc: string;
}

// Seed data
const DEFAULT_TASKS: Task[] = [
  { id: 1001, title: 'Fix PGS sign-out flow', status: 'done', agent: '🤖 Frank', priority: 'high' },
  { id: 1003, title: 'Build Mission Control', status: 'done', agent: '🤖 Frank', priority: 'high' },
  { id: 2003, title: '📊 Competitive analysis', status: 'in-progress', agent: '📋 Planner', priority: 'medium' },
  { id: 2004, title: '💰 Pricing strategy', status: 'in-progress', agent: '📋 Planner', priority: 'medium' },
  { id: 2005, title: '🖼️ Create 5 template mockups', status: 'todo', agent: '🎨 Designer', priority: 'high' },
  { id: 2007, title: '📱 Social media launch plan', status: 'todo', agent: '🎯 Orchestrator', priority: 'low' },
  { id: 3001, title: 'Connect real APIs to dashboard', status: 'todo', agent: '💻 Coder', priority: 'high' },
  { id: 3002, title: 'Add multi-agent orchestration', status: 'in-progress', agent: '🤖 Frank', priority: 'high' },
];

const AGENTS: Agent[] = [
  { name: 'Eva', role: 'Main Agent', status: 'online', avatar: '🌹', color: '#00f0ff', model: 'gpt-4o', sessions: 247, tokens: '2.4M', tasks: 18, desc: 'Primary assistant — sharp, warm, gets things done. Handles all direct interactions with Leroy.' },
  { name: 'Orchestrator', role: 'Task Manager', status: 'online', avatar: '🎯', color: '#a855f7', model: 'gpt-4o', sessions: 89, tokens: '890K', tasks: 45, desc: 'Breaks down complex tasks and delegates to specialist agents.' },
  { name: 'Coder', role: 'Implementation', status: 'online', avatar: '💻', color: '#39ff14', model: 'gpt-5.3-codex', sessions: 156, tokens: '1.8M', tasks: 67, desc: 'Handles all code implementation — writes, debugs, and deploys.' },
  { name: 'Designer', role: 'UI/UX', status: 'online', avatar: '🎨', color: '#ffb800', model: 'gpt-4o', sessions: 34, tokens: '420K', tasks: 12, desc: 'Creates beautiful, distinctive frontend interfaces and design systems.' },
  { name: 'Planner', role: 'Strategy', status: 'online', avatar: '📋', color: '#ff3366', model: 'gpt-4o', sessions: 28, tokens: '310K', tasks: 8, desc: 'Research and strategic planning. No code — pure strategy and specs.' },
];

const PROJECTS: Project[] = [
  { name: 'Purple Glow Social', status: 'active', progress: 75, color: 'green', tasks: 8, memories: 24, desc: 'SA social media management platform. AI-powered content generation for 11 languages.', url: 'https://purple-glow-social-2-0.vercel.app' },
  { name: 'Aliento Medical', status: 'active', progress: 60, color: 'green', tasks: 12, memories: 15, desc: 'SA healthcare blog platform — shift the narrative with verified positive stories.', url: 'https://alientomd.com' },
  { name: 'KitFix 2.0', status: 'active', progress: 45, color: 'cyan', tasks: 4, memories: 8, desc: 'Jersey repair service PWA. 5-stage repair pipeline with AI damage assessment.', url: '' },
  { name: 'NoZar', status: 'paused', progress: 45, color: 'amber', tasks: 0, memories: 8, desc: 'Barter/marketplace app with region-based feed, AI matching, map pins.', url: '' },
  { name: 'Mission Control', status: 'active', progress: 65, color: 'green', tasks: 3, memories: 2, desc: 'This dashboard! Retro-futuristic command center for agent fleet management.', url: '' },
  { name: "Qanita's Templates", status: 'planning', progress: 5, color: 'cyan', tasks: 0, memories: 1, desc: 'Digital templates business. Currently researching market niches.', url: '' },
];

const MEMORIES: Memory[] = [
  { date: '2026-04-01', preview: 'Mission Control converted to Next.js — real backend underway...', full: 'Started building out Mission Control with Next.js 16, TypeScript, and Tailwind. Three parallel tracks: frontend conversion, agent architecture, and API backend. Aliento blog images fixed (Sanity project ID typo).' },
  { date: '2026-03-30', preview: 'Added 13 free OpenRouter models to fleet...', full: 'Configured OpenRouter provider with step-3.5-flash, qwen3.6-plus-preview (1M ctx), nemotron-3-super, minimax-m2.5, llama-3.3-70b, and more. All free tier.' },
  { date: '2026-03-25', preview: 'Aliento studio deploy — Publish button added...', full: 'Fixed Sanity studio schema types, populated studio-aliento schemas, committed and pushed all fixes to Aliento repo.' },
  { date: '2026-03-17', preview: 'PGS auth finally working after fixing line breaks...', full: 'Root cause: line breaks in DATABASE_URL and BETTER_AUTH_SECRET in Vercel env vars. PGS DB on solitary-thunder, not divine-hat.' },
];

const DOCS: Doc[] = [
  { name: 'PGS Specification', icon: '📋', size: '24 KB', date: '2026-03-17', filename: 'pgs-spec.md', content: 'PGS Redesign 2.0 — Full specification document.\n\nStack: Next.js 16, React 19, TypeScript, Drizzle ORM, Better Auth\nDeploy: https://purple-glow-social-2-0.vercel.app' },
  { name: 'SA Healthcare SPEC', icon: '🏥', size: '18 KB', date: '2026-03-17', filename: 'sa-healthcare-spec.md', content: 'SA Healthcare Platform — Ukhozi (eagle)\n\nStack: Next.js 16, Shadcn UI, Neon PostgreSQL, Better Auth, Cloudflare R2' },
  { name: 'MEMORY.md', icon: '🧠', size: '12 KB', date: '2026-04-01', filename: 'MEMORY.md', content: 'Eva Long-Term Memory\n\n- Named: Eva 🌹\n- Human: Leroy Adonis\n- Agent fleet: Orchestrator, Coder, Designer, Planner\n- Multiple OpenRouter models configured' },
  { name: 'SOUL.md', icon: '💜', size: '3 KB', date: '2026-03-17', filename: 'SOUL.md', content: 'Eva SOUL.md — Be genuinely helpful, not performatively helpful.' },
  { name: 'Server Security Notes', icon: '🔒', size: '2 KB', date: '2026-03-16', filename: 'server-security.md', content: 'Server Security Notes\n- Tailscale: 100.82.48.57\n- UFW firewall active\n- Fail2Ban SSH: 3 max retries, 24h ban' },
];

const EVENTS: CalEvent[] = [
  { day: 1, title: 'Mission Control kickoff', type: 'task', desc: 'Started building out real backend for dashboard.' },
  { day: 7, title: 'Eval Cron 2AM', type: 'cron', desc: 'Nightly skill evaluation.' },
  { day: 10, title: 'Check Emails', type: 'reminder', desc: 'Review and respond to important emails.' },
  { day: 17, title: 'Today — OpenRouter models', type: 'task', desc: 'Added 13 free models via OpenRouter provider.' },
  { day: 25, title: 'Monthly Review', type: 'cron', desc: 'Generate monthly analytics report.' },
];

// Service layer — localStorage backed, swappable for real API
export const dataService = {
  // ---- Tasks ----
  getTasks(): Task[] {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('mc-tasks') : null;
    if (stored) {
      try { return JSON.parse(stored); } catch { /* fall through */ }
    }
    return DEFAULT_TASKS;
  },

  saveTasks(tasks: Task[]) {
    if (typeof window !== 'undefined') localStorage.setItem('mc-tasks', JSON.stringify(tasks));
  },

  addTask(task: Omit<Task, 'id'>) {
    const tasks = this.getTasks();
    tasks.push({ ...task, id: Date.now() });
    this.saveTasks(tasks);
  },

  updateTask(id: number, updates: Partial<Task>) {
    const tasks = this.getTasks().map(t => t.id === id ? { ...t, ...updates } : t);
    this.saveTasks(tasks);
  },

  deleteTask(id: number) {
    const tasks = this.getTasks().filter(t => t.id !== id);
    this.saveTasks(tasks);
  },

  // ---- Calendar ----
  getEvents(year: number, month: number): CalEvent[] {
    return EVENTS; // static for now, will sync with real cron later
  },

  // ---- Projects ----
  getProjects(): Project[] {
    return PROJECTS;
  },

  // ---- Agents ----
  getAgents(): Agent[] {
    return AGENTS;
  },

  // ---- Memories ----
  getMemories(search?: string): Memory[] {
    const all = MEMORIES;
    if (!search) return all;
    const q = search.toLowerCase();
    return all.filter(m => m.preview.toLowerCase().includes(q) || m.full.toLowerCase().includes(q));
  },

  // ---- Docs ----
  getDocs(): Doc[] {
    return DOCS;
  },

  // ---- Activity Feed ----
  activities: [] as Activity[],

  addActivity(message: string, agent = '🤖 System') {
    this.activities.unshift({
      time: new Date().toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' }),
      message,
      agent,
    });
    if (this.activities.length > 20) this.activities.pop();
  },

  getActivities(): Activity[] {
    return this.activities.slice(0, 15);
  },
};