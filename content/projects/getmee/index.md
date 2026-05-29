---
id: "getmee"
name: "AI-Powered Job Readiness Platform"
company: "GETMEE AI"
description: "How systems thinking turned a collection of isolated features into a connected product — doubling the userbase across 15+ white-label apps"
tldr: "How systems thinking turned a collection of isolated features into a connected product — doubling the userbase across 15+ white-label apps"
logo: "/projects/getmee/logo.svg"
logoColor: "#E17033"
accentColor: "225, 112, 51"
image: "/projects/getmee/getmee-hero.webp"
layeredImages:
  background: "/projects/getmee/hero/background.webp"
  foreground: "/projects/getmee/hero/front.webp"
  floatingCards:
    - src: "/projects/getmee/hero/card-1.webp"
      position: "top-right"
    - src: "/projects/getmee/hero/card-2.webp"
      position: "middle-right"
    - src: "/projects/getmee/hero/card-3.webp"
      position: "bottom-right"
tags:
  sector: "EdTech"
  role: "Head of Product & Design"
  timeline: "12 months"
quickRead:
  role: "Head of Product & Design at an AI EdTech startup. Sole designer on a team with 12 developers."
  problem: "A fragmented product across 15+ white-label apps, a reactive dev team, and no infrastructure to scale. Features existed but didn't connect into a coherent experience for students or teachers."
  approach: "Built the foundation before the features — design system, QA process, product council, and team rituals. Then reframed a teacher request for 'more tasks' into a personalised AI learning journey that removed the burden from teachers entirely."
  outcome: "White-label deployment time dropped from weeks to 2 hours. Userbase doubled to 40k across 15+ apps. Pilot data across 1,100+ students in 3 countries showed strong satisfaction and measurable improvement in English confidence."
  skills: "Systems thinking · Design leadership · AI product design · Design systems · User research · Stakeholder management"
---

## Background

Getmee is an AI EdTech platform serving universities, employment services, and language schools across 15+ white-label apps. End users (students, job seekers, immigrants) use the mobile app for English learning and employability coaching, while teachers and coaches manage progress via the web platform.

When I joined Getmee, the 12-person development team was drowning in customer requests with no real prioritisation framework. Each new item was given the highest priority, and without any real processes across the product lifecycle, much of the work was fragmented and half complete.

![Example of some key screens from one of the whitelabel apps when I first started](/projects/getmee/Getmee_whitelabel_app_prior_to_arrival.webp)

## Building the foundation

Features were being designed and built with AI tools, but without a shared design system. Each of these new features had to be white-labelled for every customer app which took weeks. This was taking crucial development time away from the product itself.

To tackle this, I built a lightweight design system with a focus on scaling across all of our different apps. I met with our customers to understand their needs, and to get any brand assets from them.

Many of our customers only had a couple of brand colours from their logos and no formal design guidelines. To solve this, I built an AI-assisted tool that would take those colours and generate a full set of WCAG AA compliant shades, giving every app a consistent and accessible palette.

The outcome of this system was that new white label apps now took only 2 hours to build, with most of that time going into testing. Alongside this, new features could now be automatically released immediately to all apps at the same time.

<div class="whitelabel-slider-container"></div>

### Building the systems behind the product:

- Moving the team to Notion broke down knowledge silos, giving the team a shared space to track work and document decisions, increasing knowledge share across the team.
- The Getmee Product Council ensured we were building the right things. This was a quarterly meeting with key customers used to (in)validate our roadmap and gather real feedback before committing to a build.
- Weekly product meetings and UX office hours gave the whole team a voice in the product, adding transparency to design decisions and engaging the team in the problems we looked to solve.

These processes ushered the team away from being reactive and created space to build new features that actually moved the product forward.

## Tightening the Product

With a solid foundation in place, I shifted focus to tightening the product itself, turning what was a broad set of isolated features into a cohesive experience.

I started by reducing friction. Passwordless registration replaced the confusing password flow, and I spent significant time fixing stability issues impacting all white-label apps. These weren't headline features, but they compounded into far fewer support requests and greater trust in the product.

![Passwordless registration flow](/projects/getmee/Getmee_Registration.webp)

The English Level Test was another critical upgrade. Previously it was just a standalone assessment that students took once and forgot about. This was a nice feature, but it could be expanded upon to address a real user problem: learners with lower English proficiency found the app frustrating because AI-generated content was using vocabulary way past their level.

With the help of the English teachers, I updated the Test, adding new question types, actionable feedback, and most importantly ensured that the assessed level now informed content difficulty across the app. It went from a standalone feature to the engine behind the user's learning experience.

![English Level Test before and after](/projects/getmee/English_Test_Results.webp)

I also built per-role navigation so students, teachers, and admins saw different experiences, and created Resources and Courses systems so that organisations could plug in their own training material. With 15+ white-label apps serving different contexts, this configurability was essential for our growth.

The AI English Tutor is an example of where this systems thinking came together most completely.

<div class="feature-deep-dive"><div class="feature-deep-dive-line"></div><span class="feature-deep-dive-label">Feature deep dive: AI English Tutor</span><div class="feature-deep-dive-line"></div></div>

## The Problem Teachers Couldn't Articulate

When speaking to our users, in this case, teachers, they often requested we add more and more task assignment features. This seemed like a straightforward request, and one that in the past would have been followed to a 't'.

When digging deep though, the real problem emerged: **teachers didn't have time to create, assign and monitor tasks in the first place**. Each new feature we built for them added to their workload. Learning new tools, monitoring student progress and keeping content up to date wasn't something that delighted them; it was a chore that took away from what they enjoyed.

Meanwhile, students using the app faced the other side of that problem; **if teachers don't create, assign and monitor tasks, then students didn't know what to do**. The app was full of valuable features (AI interview simulations, flashcards, pronunciation practice, soft skills training) but they existed in isolation. There was no clear path for how using these features would translate to improved English proficiency.

![App lack of structure](/projects/getmee/App_lack_of_structure.webp)

## Identifying Opportunities

Following the user and customer conversations, I conducted competitor analysis using (and proofreading) AI. Looking at 7 major language learning platforms (Duolingo, Babbel, ELSA Speak, Busuu, Rosetta Stone, Coursera, Lingoda) in order to understand their offerings and identify what opportunities we might have over them.

**Key insights:**

- **Competitors nail habit mechanics, but not meaningful progression.** Duolingo and Babbel have mastered streaks, push notifications, and daily engagement. However, this daily activity rarely maps to measurable skill growth. Students stay active without knowing if they're actually improving.
- **Feature sets are rich; learning journeys are not.** Platforms like Busuu and Rosetta Stone offer pronunciation tools, flashcards, and AI tutoring but these exist as disconnected modules. There's no coherent path that ties daily practice to a longer-term goal.
- **"5 minutes a day" undersells the real commitment.** Almost every competitor markets low-effort promises that set unrealistic expectations. They didn't acknowledge the sustained, structured effort language learning actually requires.
- **Career motivation is universal; employability framing is absent.** Despite many adult learners studying English for career reasons, no platform structures its learning path around job readiness. This was the clearest gap and our biggest opportunity.

The platforms I looked at did a good job of solving English learner engagement, but none of them were built with employment at the core. For our users (immigrants, students and job seekers), that's the end goal. The opportunity for us was to combine employability-focused features with personalised CEFR-aligned learning journeys that required zero teacher management.

![Competitive analysis findings](/projects/getmee/image.webp)

## Designing the System, not just the feature

My first version generated tasks one day at a time, in isolation. It worked in my own testing, but it broke down once I realised every learner's journey is different. A single daily guess couldn't build a coherent week or structure learning in a way that made sense at scale.

![QA Generation Pipeline](/projects/getmee/QA_Generation_Pipeline_v2.svg)

The change made was to plan the whole week up front, making sure that the entire context of the learner, the system, and the curriculum were properly considered. This taught me a core lesson of the project: AI can generate content, but it needs guardrails, put up by experts, to do so successfully.

Working with English teachers, I defined a near 50-page Curriculum Framework covering what learners can and can't do at each CEFR level, which task types suit each level, and what good looks like. I then worked with the development team to build a library of example tasks and specs for every task type. These would all serve as the reference that the agents would use to ensure personalised, proper learning tasks were being created.

![Updated Task Generation Flow](/projects/getmee/updated_task_generation_flow.webp)

The generation itself is split across three agents, so no single call has to do everything. A Curriculum Planner decides the week's focus and assembles a self-contained brief; the learner's context plus the task types and content relevant to them. A second agent, built again with teachers, generates the tasks using that brief as its guide along with seeing the user's previous tasks so as not to create duplicates. A third reviews every task against a defined rubric and the weekly brief, so only relevant, on-level tasks reach the user.

AI could still make mistakes though, so students needed the ability to flag tasks that they saw as poor quality. Flagged tasks were sent to our dashboard where we could see the entire task list and remove any tasks that had been flagged disproportionally to their usage.

![Student Flags Process](/projects/getmee/Student_Flags_v3.svg)

For the student, the experience was simple. During onboarding, they could select their interests and take an English Level Test, this would then prompt the AI to generate relevant tasks for them.

The app's home page was restructured to show users their clear next action, reducing any ambiguity or decision fatigue for them. AI generated tasks, made up of all of the app's key features, unlocked each day, creating a mild sense of urgency for users. Each time a user completed a task they earned points, which added up to unlock English Level Tests that tracked their progress over time.

![English Learning Journey](/projects/getmee/English_Journey_Images.webp)

Teachers could view and adjust each student's level from the dashboard. They could also continue to create their own tasks with a refreshed UX. All person-generated content would be prioritised on the students' app, ensuring teacher content always took precedence over AI-generated content.

![Teacher Dashboard Mockup](/projects/getmee/Members_mockup.webp)

The real work in this project was in defining quality, building multi-level feedback loops, and restructuring the product experience so that everything, from onboarding to daily tasks to level progression, felt like a coherent journey rather than a collection of features.

I learned to design the *behaviour* of the AI, not just the UI around it.

![System Flow](/projects/getmee/system_flow_image.webp)

## Early Validation

While the full AI English Tutor pilot is scheduled post-departure, early indicators from internal testing and stakeholder feedback show strong promise. The system has successfully generated tasks across 6 CEFR levels and 30 interests, with a high AI QA pass rate.

This builds on proven product quality across pilots in multiple geographies:

<div class="pilot-stats-grid">

  <div class="pilot-card">
    <div class="pilot-card-header">
      <span class="pilot-flag">🇲🇽</span>
      <div>
        <div class="pilot-card-title">Mexico — UPY</div>
        <div class="pilot-card-meta">University · 475 students · 6 weeks</div>
      </div>
    </div>
    <div class="pilot-stats-row">
      <div class="pilot-stat">
        <div class="pilot-stat-number">85.4%</div>
        <div class="pilot-stat-label">rated the app "very useful" or "most useful tool used"</div>
      </div>
      <div class="pilot-stat">
        <div class="pilot-stat-number">90%</div>
        <div class="pilot-stat-label">want it to continue in their curriculum</div>
      </div>
    </div>
  </div>

  <div class="pilot-card">
    <div class="pilot-card-header">
      <span class="pilot-flag">🇲🇽</span>
      <div>
        <div class="pilot-card-title">Mexico — UTM</div>
        <div class="pilot-card-meta">University · 435 students · 6 weeks</div>
      </div>
    </div>
    <div class="pilot-stats-row">
      <div class="pilot-stat">
        <div class="pilot-stat-number">78%</div>
        <div class="pilot-stat-label">rated "very useful" or "most useful tool used"</div>
      </div>
      <div class="pilot-stat">
        <div class="pilot-stat-number">91%</div>
        <div class="pilot-stat-label">want it to continue in their curriculum</div>
      </div>
    </div>
    <div class="pilot-improvements">
      <div class="pilot-improvement-item">
        <div class="pilot-improvement-label">Interview readiness (unprepared)</div>
        <div class="pilot-improvement-bar-wrap">
          <div class="pilot-improvement-bar-before" style="width:73%"><span>73%</span></div>
          <div class="pilot-improvement-arrow">→</div>
          <div class="pilot-improvement-bar-after" style="width:47%"><span>47%</span></div>
        </div>
      </div>
      <div class="pilot-improvement-item">
        <div class="pilot-improvement-label">English communication (unprepared)</div>
        <div class="pilot-improvement-bar-wrap">
          <div class="pilot-improvement-bar-before" style="width:49%"><span>49%</span></div>
          <div class="pilot-improvement-arrow">→</div>
          <div class="pilot-improvement-bar-after" style="width:34%"><span>34%</span></div>
        </div>
      </div>
      <div class="pilot-improvement-item">
        <div class="pilot-improvement-label">Technical vocabulary confidence</div>
        <div class="pilot-improvement-bar-wrap">
          <div class="pilot-improvement-bar-before" style="width:10%"><span>10%</span></div>
          <div class="pilot-improvement-arrow">→</div>
          <div class="pilot-improvement-bar-after" style="width:28%"><span>28%</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="pilot-card">
    <div class="pilot-card-header">
      <span class="pilot-flag">🇮🇳</span>
      <div>
        <div class="pilot-card-title">India — CMR</div>
        <div class="pilot-card-meta">University · 193 students · 4 weeks</div>
      </div>
    </div>
    <div class="pilot-stats-row">
      <div class="pilot-stat">
        <div class="pilot-stat-number">97.6%</div>
        <div class="pilot-stat-label">rated the app useful or best tool used</div>
      </div>
      <div class="pilot-stat">
        <div class="pilot-stat-number">84.5%</div>
        <div class="pilot-stat-label">would recommend to peers</div>
      </div>
      <div class="pilot-stat">
        <div class="pilot-stat-number">80.6%</div>
        <div class="pilot-stat-label">task completion rate</div>
      </div>
    </div>
  </div>

</div>

The AI English Tutor is the strategic evolution of infrastructure that's already demonstrated impact across pilots with 1,100+ students in three countries.

All of the foundational work, product tightening, and AI English Tutor helped scale Getmee from 20,000 to 40,000 active users across 15+ white-label apps while significantly reducing support burden, increasing product trust and improving the team's release velocity.

## What I learned about Product Leadership

- **Designing AI behaviour, not just interfaces.** As the UI is becoming an increasingly easier output for product teams, the systems behind them are where true designer value lies. I learned to write system prompts, design QA rubrics, and set confidence thresholds, making sure to serve real user needs.
- **A product is only as good as the team building it.** At Getmee, it was clear from the start that many processes didn't exist, and wouldn't unless someone took control. By setting up UX office hours, weekly leadership calls and by engaging with feedback, I helped the team to become more cohesive and engaged in the product.
- **Saying no is a leadership skill.** At Getmee, every feature request came with urgency attached. Learning to push back, to challenge the brief, question the assumption, and redirect the conversation toward the actual problem was one of the most valuable things I did for the team and the product roadmap. It ensured important work was prioritised, and led to impactful releases for users.
- **In a distributed team, clarity is a design problem too.** Working across time zones with varying communication preferences, I learned that how you communicate a decision is just as important as the decision itself. I defaulted to over-documenting by using Slack, Loom, and AI-assisted docs so the team always had the context they needed, in a format that worked for them.
