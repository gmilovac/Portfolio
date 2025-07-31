---
title: Peach Innovators 2.0
date: 2025/5/15
description: (CAPSTONE) Enhancing rowing performance analysis through environmental normalization.
tag: Python, SQL, Machine Learning
author: Gordan Milovac
---

# Peach Innovators 2.0

This project was completed as a capstone for CSCI1420: Machine Learning in Spring 2025 at Brown University. It builds on the original _Peach Innovators_ project by introducing advanced normalization techniques to improve rowing performance analysis in the presence of uncontrolled environmental conditions.

---

![Racing](/images/racing.webp)

---

### Background

In rowing, boat speed depends on a complex mix of factors including stroke rate, power output (watts), effective stroke length, and crew synchronization. Telemetry systems like PEACH provide detailed metrics during on-water sessions, allowing technical analysis of stroke mechanics.

The original _Peach Innovators_ project explored how watts, stroke length, and watt variance correlate with boat speed. While initial results were promising, they were hindered by environmental noise—specifically wind and tidal variation—leading to inaccurate modeling.

**GitHub Repository:**  
[https://github.com/gmilovac/PeachInnovators2.0](https://github.com/gmilovac/PeachInnovators2.0)

**Final Deliverable PDF:**  
[Peach Innovators 2.0 Final Report](https://drive.google.com/file/d/1AZLOnODWtWNgtvkv33jG-wKUWhcochtJ/view?usp=sharing)

---

![Bg](/images/wind.JPG)

---

### Project Goal

Peach Innovators 2.0 aimed to improve performance analysis by **normalizing boat speed with respect to environmental conditions** such as wind and tide. By removing this noise, we could evaluate how rower performance variables affect boat speed under “neutral” conditions.

### Methodology

The enhanced dataset consisted of **~10,000 telemetry entries** gathered from Brown Men’s Crew practices. Additional data on **wind** (from Weather Underground) and **tide** (from NOAA) was manually matched to each rowing session.

To reduce complexity and improve modeling:

- **Wind** was categorized into: _tailwind_, _headwind_, and _crosswind_
- **Tide** was categorized into: _with_, _against_, and _slack_

These were mapped to each rowing piece by direction and time of day.

After multiple trials, the most accurate normalization method:

- Normalized **each rower’s speed individually**
- Then averaged normalized speeds per boat

This hybrid method preserved individual differences while capturing uniform environmental impact.

We then re-ran our statistical and ML tests from the original project using:

- **OLS regression**
- **Pearson correlation**
- **MLP regression**
- **XGBoost models**

---

![Data](/images/peach.jpeg)

---

### Results and Analysis

#### Pearson Correlation (Before vs. After Normalization)

| Variable         | Raw Speed Correlation | Normalized Speed Correlation |
| ---------------- | --------------------- | ---------------------------- |
| Average Watts    | **0.686**             | **0.658**                    |
| Watt Variance    | -0.200                | 0.005                        |
| Effective Length | 0.292                 | 0.278                        |

- **Watt Variance** lost significance after normalization → previously amplified by environmental effects.
- **Average Watts** remained the strongest predictor of boat speed.
- **Effective Length** remained a moderate but consistent factor.

#### Machine Learning

- **MLP RMSE** improved from **0.5600 → 0.4954**
- **OLS RMSE** improved from **0.285 → 0.119**
- **MSE** decreased significantly (from **0.081 → 0.014**)

These results confirmed that normalization substantially improved model stability and predictive accuracy.

---

![Table](/images/rowingtelem.jpg)

---

### What Worked and What Didn't

**Successes:**

- Environmental normalization significantly improved performance clarity
- Enhanced ability to isolate rower-driven effects on boat speed
- Robust categorical encoding of wind/tide data

**Limitations:**

- Incomplete historical gust/wind data
- Tidal strength estimates lacked precision
- Practice session variation (e.g. rate caps, intensity, lineup) remained uncontrolled
- High multicollinearity among predictors (condition numbers > 30,000)

### Conclusion

Peach Innovators 2.0 successfully demonstrated the value of **environmental normalization** in rowing performance analysis. While **average watts** remained the only consistently significant predictor of boat speed, this project showed that **effective length** has stable influence, and that **watt variance** may be overstated when not accounting for external conditions.

Despite limitations, the normalization pipeline introduced here offers a valuable tool for more accurate performance modeling—and opens the door for future research into fatigue, synchronization, and more refined sensor data.

---

![Graph](/images/needdata.png)

---

### Future Work

- Integrate real-time environmental sensors
- Improve gust/tide accuracy using higher-frequency data
- Explore ensemble models and LSTM-based time-series architectures
- Add synchronization and fatigue modeling to better capture performance dynamics

---

### Author & Contributions

**Gordan Milovac**  
Project design, data gathering, environmental normalization modeling, ML implementation, report writing, and visualizations.
