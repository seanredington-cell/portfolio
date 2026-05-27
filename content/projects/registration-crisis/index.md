---
id: "registration-crisis"
name: "Registration in the Time of a Crisis"
company: "CYGNVS"
description: "Reducing the error rate of registration from 50% to less than 2% during cyber incidents, solving over 60 registration paths to ensure users can quickly access their colleagues in CYGNVS."
tldr: "Reducing the error rate of registration from 50% to less than 2% during cyber incidents, solving over 60 registration paths to ensure users can quickly access their colleagues in CYGNVS."
logo: "/icon-cygnvs-2.png"
logoPlaceholder: "🔐"
logoColor: "#1E3A8A"
accentColor: "30, 58, 138"
protected: true
password: "letmein"
image: "/projects/registration-crisis/registration-hero.png"
layeredImages:
  background: "/projects/registration-crisis/registrayion-hero-bg.svg"
  foreground: "/projects/registration-crisis/registration-hero.png"
  floatingIcons:
    - src: "/projects/registration-crisis/🤯.png"
      position: "top-left"
    - src: "/projects/registration-crisis/😡.png"
      position: "top-right"
    - src: "/projects/registration-crisis/❌.png"
      position: "bottom-left"
tags:
  sector: "Cybersecurity"
  role: "Lead UX Designer"
  timeline: "6 months"
quickRead:
  role: "Lead UX Designer on a fast-tracked, cross-functional project across web and mobile teams."
  problem: "During a live cyber incident, only 12 of 25 invited users could complete registration — a 50% failure rate at the worst possible moment. The platform had 65 registration paths, many leading to dead ends."
  approach: "Mapped all 65 flows with a PM, defined task flows with cross-functional stakeholders, and ran usability testing on 11 participants. Iterated heavily on copy (not just UI) based on findings, then fast-tracked a secondary 'quick access' flow to address an urgent gap discovered during live use."
  outcome: "Error rate dropped from 50% to under 2%. In a subsequent incident, 66 of 67 newly invited users registered without issue. Platform saw a 300% increase in new company sign-ups post-launch."
  skills: "UX design · Task flow mapping · Usability testing · Cross-functional collaboration · Copy writing · Mobile & web design"
---

## Background

CYGNVS is a collaborative out-of-band incident response platform. Users need to be able to be connected with their colleagues on the platform in the event that they lose access to their work email.

As a result there are a large number of ways a user can get access to the platform, many of which had been neglected for some time, leading to registration dead ends and significant user and customer dissatisfaction.

---

## Problem

During an incident experienced by one of our customers, only **12 out of 25** invited users were able to complete registration. This dramatically delayed their incident response plan at a moment when time is most critical.

We realised that their issues were varied and not unique and would need to be fixed in order for our product to scale successfully.

- **Users need to be able to onboard to CYGNVS easily when they are invited.** When onboarding users to CYGNVS before an incident has occurred, users need to be able to be associated with their colleagues and register and sign in to CYGNVS without any issues so that they are prepared in the event that an incident occurs.

- **Users need to connect with their colleagues quickly during an incident.** When an incident occurs and users no longer have access to their work accounts, users need to be able to be invited and register quickly and securely for CYGNVS. They need to be associated with their colleagues so that they can begin to work together to resolve the incident as easily as possible.

---

## Goal

- Reduce the 50% error rate of registration during an incident
- Reduce the proportion of support cases created related to registration and sign in
- Identify and solve for all possible registration and sign in paths

---

## Process

### Understanding the scale of the problem

To start, working with a product manager, we mapped out all 65 existing registration and sign in flows on our platform. Many of these were problematic, leading to dead ends or requiring support intervention. This complexity arose from our diverse registration methods, with each security layer multiplying the number of paths.

![All registration flows mapped](/projects/registration-crisis/reg-image-1.png)

### Defining the flow

Working with internal stakeholders from all levels within the company, I created and iterated on a number of task flows which encompassed each of these flows. These were heavily scrutinised to ensure that all cases of registration were accounted for.

![Task flow diagram](/projects/registration-crisis/reg-image-2.png)

### User testing

After creating and discussing a number of different sketches and lo-fi mock ups with the stakeholders, high fidelity wire frames were created on both web and mobile that would be used to test the registration flow.

![User testing screens](/projects/registration-crisis/reg-image-3.png)

The flows were tested on mobile by 11 participants with no prior knowledge of the product using Optimal Workshop.

![User test results](/projects/registration-crisis/reg-image-4.png)

The main takeaways were as follows:

- The copy was difficult to understand, especially in a crisis
- Users were frustrated and confused at being asked for their work email address given that it had been compromised
- Users appreciated the level of security to register given the scenario

### Iterating and re-testing

Realising that our users' main pain points were in relation to the copy, I made updates and again tested, this time internally with users that were seeing the new flows for the first time. While there were some hiccups, we were confident in our flow as a whole after this round of testing.

After discussing the findings and iterations with the wider team, I worked on delivering fully spec'd out flows to our development teams on both web and mobile.

![Final mobile designs](/projects/registration-crisis/reg-image-5.png)

### Quickly addressing new requirements

This project was fast-tracked due to its importance and was being built by the development teams as the design continued to iterate. Due to this, we were fortunate to have users get access to our updated flows, and after some usage we learnt there was a key problem area that we needed to address urgently:

- **Users need instant access during an incident when their work email is compromised.** As a user that has been invited to CYGNVS during an incident and no longer has access to my work email, I need to be able to instantly gain access to the platform so that I can collaborate with my colleagues and begin to resolve the issue.

Based on this, we kicked off a secondary project which allowed users quick access to the platform for a limited time, before requiring them to complete registration. This project again was done with security at the forefront and was fast-tracked due to its business advantage.

![Quick access flow](/projects/registration-crisis/reg-image-6.png)

---

## Impact

- 2000+ new companies and over 5000 new unique users have registered for the platform, a 300% increase compared to before this release
- Reduction in error rate from 50% to less than 2%. In a recent incident, 67 new members were invited to CYGNVS and 66 of them registered successfully without issue
- We solved for over 50 of the 65 flows in registration. The cases which weren't addressed were related to users that were already invited to the platform before the changes were made, but hadn't registered. We worked with our support team to ensure they had the knowledge to solve these cases when they arose for users

---

## Learnings

This project required lots of work across teams and geographies. At the beginning it was difficult to co-ordinate and communicate effectively across different timezones and teams meaning decisions were often miscommunicated or not shared out properly. To combat this, we only had the key decision makers in each meeting, and then had a document which was our source of truth and tracked all of the key decisions. This greatly helped with the speed of delivery and the reduction of meetings.
