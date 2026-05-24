```md
# Sequential Progress Bars

**Interview Question:** How to animate multiple progress bars in a sequence?  
**Topic:** React.js, JavaScript, HTML, CSS  
**Asked by:** Uber, Myntra  
**Difficulty:** Easy / Medium

## Overview

In this challenge, you need to build a UI that allows users to create multiple progress bars by clicking a button.

Each time the user clicks the button, a new progress bar should be added to the screen. However, progress bars must not animate at the same time. Instead, they should run **one after another**, in the same order they were created.

This type of question is commonly used in frontend interviews to test state management, rendering lists, timing logic, and animation control.

## Problem Statement

Create an application where clicking a button adds a new progress bar to the page.

Each progress bar should animate from `0%` to `100%` over a duration of **3 seconds**.

If the user clicks the button multiple times, the progress bars should be added to a queue. The next progress bar should only start animating after the previous one has completed.

## Functional Requirements

- Render a button that allows the user to add a new progress bar.
- On every button click, add a new progress bar to the screen.
- Each progress bar should animate from `0%` to `100%`.
- The animation duration for each progress bar should be **3 seconds**.
- Multiple progress bars should be handled in a queue.
- Only one progress bar should animate at a time.
- The `Nth` progress bar should start only after the `N-1` progress bar has completed.
- Completed progress bars should remain visible on the screen.

## Example Flow

1. The user clicks the button once.
2. One progress bar appears and starts animating.
3. The user clicks the button three more times while the first bar is still loading.
4. Three more progress bars are added to the screen.
5. The second progress bar starts only after the first one reaches `100%`.
6. The third starts after the second finishes.
7. The fourth starts after the third finishes.

## Expected Behavior

```txt
Click 1 → Progress Bar 1 starts
Click 2 → Progress Bar 2 is queued
Click 3 → Progress Bar 3 is queued

Progress Bar 1 completes
Progress Bar 2 starts

Progress Bar 2 completes
Progress Bar 3 starts
```

## Technical Focus

This challenge evaluates your ability to work with:

- React state management
- Dynamic rendering of lists
- Queue-based execution
- Timers and animation lifecycle
- CSS transitions or animations
- Component communication and re-rendering

## Constraints

- Progress bars should not animate in parallel.
- Each progress bar must take exactly **3 seconds** to complete.
- User clicks should not be ignored; every click should create a new queued progress bar.
- The order of execution must match the order of creation.
```
