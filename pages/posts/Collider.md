---
title: Interactive Collider Design for 3D Meshes
date: 2025/12/11
description: (APP) Collider generation, decomposition, and rigging for 3D meshes.
tag: Computer Graphics, Geometry Processing, C++, 3D Meshes, HCI
author: Gordan Milovac, Marcus Winter, Patrick Ortiz
---

# Interactive Collider Design for 3D Meshes

This project was completed as a final project for CSCI2952Y: Special Topics in Computational Design and Fabrication in Spring 2025 at Brown University. It presents an interactive tool for designing and evaluating collision meshes (colliders) for both static and skeletal 3D assets, with an emphasis on usability, performance, and downstream game-engine compatibility.

---

![Collider Overview](/images/spider.png)

---

### Background

In real-time graphics engines and physics simulations, **collision meshes** are critical for accurate interaction while maintaining performance. High-fidelity visual meshes are often too complex for physics calculations, requiring simplified collider representations that balance accuracy and efficiency.

Existing collider-generation workflows are typically:

- Manual and time-consuming
- Poorly visualized
- Disconnected from animation and rigging contexts

This project addresses these limitations by providing an **interactive collider design pipeline** that supports static and skeletal meshes, exposes decomposition parameters to users, and enables immediate visual and quantitative evaluation.

**GitHub Repository:**  
https://github.com/mwinter02/CS2952Y_Final

---

### Project Goal

The goal of this project was to build a **fully interactive collider-generation system** that allows users to:

- Load and inspect 3D meshes
- Generate colliders using multiple decomposition strategies
- Tune parameters and visualize results in real time
- Evaluate accuracy–performance trade-offs
- Export collider assets compatible with standard 3D workflows

A secondary goal was to evaluate usability through a controlled user study.

---

### System Overview

The system is implemented primarily in **C++** and consists of the following components:

- Interactive 3D mesh viewer
- Static mesh convex decomposition
- Skeletal mesh collider generation and rigging
- Error and performance metrics
- Animation previews
- Asset export pipeline

---

![Viewer UI](/images/bunny.png)

---

### Methodology

#### Activity 1: 3D Viewer UI & Downloads

We implemented a 3D viewer supporting:

- Loading `.obj` and `.fbx` meshes
- Visualizing original meshes alongside generated colliders
- Wireframe and overlay modes
- Exporting collider meshes as `.obj` or `.fbx` files

This enabled rapid iteration and inspection of collider quality.

---

#### Activity 2: Static Mesh Convex Decomposition

For static meshes, we adapted the **CoACD (Convex Approximate Convex Decomposition)** algorithm, extending it to support **user-specified parameters** controlling:

- Decomposition granularity
- Accuracy vs. speed trade-offs
- Outset (extrusion) of colliders

We additionally implemented:

- **Axis-Aligned Bounding Box (AABB)** collider generation
- Visualization of colliders over wireframe meshes

This allowed users to compare decomposition strategies interactively.

---

![Convex Decomposition](/images/colliderdemo.gif)

---

#### Activity 3: Performance & Error Metrics

To quantify collider quality, we implemented **static mesh error metrics**, including:

- Relative volume difference between mesh and collider
- Visual comparison across accuracy modes

Results showed that:

- Higher-accuracy modes reduced volume error
- Outset parameters improved coverage but increased collider volume

Skeletal mesh error metrics were not implemented, representing a known limitation.

---

#### Activity 4: Skeletal Mesh Decomposition & Collider Rigging

For animated assets, we implemented **skeletal collider generation** using two modes:

- Convex hull colliders
- AABB colliders

Key features:

- Colliders generated based on bone placement and vertex influence
- User selection of specific bones
- Colliders rigged to the original skeleton
- Exported assets verified for correctness in **Blender**

This allowed generated colliders to function as usable game assets.

---

![Skeletal Colliders](/images/flip.gif)

---

#### Activity 6: Animation Previews

We integrated **animation previews** for skeletal colliders, enabling users to:

- View colliders across different animation poses
- Inspect collider behavior during motion

Limitations included:

- No real-time error metrics during animation
- No manual bone transformation controls

---

### User Study

We conducted a **user study with 7 participants** to evaluate usability and perceived workload.

Participants interacted with the system to:

- Generate colliders
- Adjust parameters
- Interpret visual and quantitative feedback

**NASA-TLX results** indicated generally low perceived effort, with positive feedback on system capability.

---

![NASA TLX](/images/collidernasatlx.png)

---

### Results and Analysis

**Strengths:**

- High-quality static and skeletal collider generation
- Effective visualization of decomposition results
- Robust skeletal rigging pipeline
- Exportable, engine-ready assets
- Positive user feedback overall

**Observed Issues:**

- Long processing times without progress indicators
- Initial confusion due to technical terminology
- Missing integrations with game engines (e.g., Unreal Engine)
- Incomplete web deployment

Users adapted quickly, but clearer feedback during computation was identified as a major usability improvement opportunity.

---

### What Worked and What Didn’t

**Successes:**

- Convex decomposition with user-tunable parameters
- Skeletal mesh collider rigging verified in external tools
- Clear visualization of collider–mesh relationships
- Strong performance on core system components

**Limitations:**

- No web-based deployment
- Limited animation tooling
- Partial performance metric coverage
- Lack of direct engine integration

---

### Conclusion

This project demonstrates that **interactive collider design** can significantly improve both the usability and effectiveness of collision mesh workflows. By combining geometric algorithms, real-time visualization, and user evaluation, the system provides a practical foundation for collider generation in modern graphics pipelines.

Despite some missing extensions, the core system achieved strong technical performance and validated the feasibility of interactive, user-driven collider design.

---

### Future Work

- Add progress indicators for long-running computations
- Integrate real-time animation error metrics
- Support manual bone transformations
- Deploy a web-based version of the tool
- Add direct Unreal Engine and Unity export pipelines

---

### Author & Contributions

**Gordan Milovac**: System design, visualization, user study design and analysis, final presentation.

**Marcus Winter, Patrick Ortiz**: Algorithm implementation, mesh processing, UI integration, convex decomposition tooling, skeletal rigging logic, skeletal decomposition, evaluation, and testing.
