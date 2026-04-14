# Task Delegation Among Agents

## Overview
Task delegation ensures that each agent in the fleet leverages its specialized skills while maintaining seamless collaboration. The Orchestrator acts as the central coordinator, breaking down complex requests and assigning subtasks to the most appropriate agent.

## Delegation Examples

- **General Queries**: Frank handles these by default unless they involve deep design, coding, or strategic research.
- **Complex Workflows**: The Orchestrator decomposes these into subtasks, distributing responsibilities among Coder, Designer, and Planner.
- **Code Implementation**: Tasks requiring programming go to Coder. The Orchestrator ensures modular distribution when necessary.
- **UI/UX Design**: Any visual or interface-related tasks are forwarded to Designer.
- **Research and Strategy**: Planner tackles these tasks, focusing on detailed reports and actionable insights.

## Communication Flow
1. **Initial Request**: Frank or Orchestrator receives and analyzes the task.
2. **Task Breakdown**: Orchestrator, if invoked, breaks the work into subtasks.
   - Subtasks are routed based on agent specialization.
3. **Execution and Feedback**: Specialized agents perform their tasks and report to Orchestrator.
4. **Final Compilation**: Orchestrator aggregates subtasks into the final deliverable.

## Advantages
- **Efficiency**: Each agent focuses on what they do best.
- **Scalability**: Enables handling of larger, more complex requests.
- **Clarity**: Organized and streamlined task management.

## Tips for Effective Delegation
- Keep detailed logs of progress.
- Use the Orchestrator’s summaries for high-level insights.
- Verify task completeness before passing back to the requester.