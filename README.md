# Next.js 13 Link Component LegacyBehavior Issue

This repository demonstrates a common issue encountered when upgrading to Next.js 13, specifically related to the `Link` component's `legacyBehavior` prop.  Improper use can result in routing errors or incorrect page rendering.

## Problem

The `legacyBehavior` prop in Next.js 13's `Link` component has changed how it interacts with dynamic routes and client-side routing.  Older code might rely on implicit behavior that's now explicit or has been altered.  This example shows a scenario where incorrect usage causes the link to not work correctly.

## Solution

The solution involves a careful review of how the `Link` component is utilized, ensuring that its behavior aligns with the updated Next.js 13 specifications. Often, switching to the new router behaviour resolves the issue but may need changes to the associated route handling and rendering logic.