export const workDetails = [
    {
      slug: "taskgpt",
      title: "TaskGPT",
      subtitle: "AI-Powered Chrome Extension",
      tags: ["AI Productivity", "Browser Extension", "Writing Assistance"],
      overview: [
        "TaskGPT is an AI-powered Chrome extension that brings multiple AI assistants into one unified browser experience. The platform includes AssistAI, PromptAI, Email Responder, and AuthorAI, helping users improve writing, generate responses, draft emails, and create long-form content directly within their browsing workflow.",
        "I enhanced the existing product by implementing two key capabilities: intelligent grammar correction and predictive text completion. I also contributed to improving the chatbot experience, helping increase response accuracy from approximately 40–50% to 80–90%, based on the reported results.",
      ],
      challenge: [
        "The existing extension provided multiple AI assistants, but the chatbot experience had inconsistent response quality. Users also needed more effective writing assistance than basic text replacement, along with a faster way to complete sentences while typing across different webpages.",
        "The goal was to improve the reliability of AI-assisted interactions and introduce writing features that integrate naturally into users' existing workflows.",
      ],
      contributions: [
        {
          title: "Intelligent Grammar Correction",
          intro:
            "Developed an inline grammar-correction experience that identifies and explains writing issues directly within supported webpage input fields.",
          points: [
            "Detects grammar, spelling, and clarity issues in user-entered text.",
            "Highlights problematic text with inline underlines.",
            "Displays contextual popups containing the original text, suggested correction, and explanation of the identified issue.",
            "Organizes multiple errors into a navigable list, allowing users to jump directly to a specific error, even in lengthy text.",
            "Enables users to review individual suggestions and improve their writing without leaving the current webpage.",
          ],
          result:
            "100% accuracy in the implemented grammar-correction feature's evaluated cases.",
        },
        {
          title: "Predictive Text Completion",
          intro:
            "Implemented an intelligent autocomplete experience that helps users complete sentences with minimal interruption.",
          points: [
            "Generates suggested text based on the user's existing input.",
            "Provides contextual sentence completions directly within supported input fields.",
            "Enables users to insert suggested text using a keyboard shortcut.",
            "Reduces repetitive typing and supports a smoother writing workflow across supported webpages.",
          ],
          example:
            "For example, typing “How are” can produce the suggestion “How are you?”, which users can insert using a shortcut.",
          result:
            "100% accuracy in the implemented predictive-text feature's evaluated cases.",
        },
        {
          title: "Chatbot Response Quality Improvement",
          intro:
            "Contributed to improving the response quality of the extension's existing AI chatbot experience.",
          points: [
            "Worked on the AI interaction experience to improve the reliability of generated responses.",
            "Helped improve the consistency and usefulness of chatbot outputs.",
            "Supported a more dependable experience across the extension's AI-powered workflows.",
          ],
          result:
            "Chatbot response accuracy increased from approximately 40–50% to 80–90%.",
        },
      ],
      outcome: [
        "TaskGPT evolved into a more capable AI writing assistant, combining multiple AI tools with contextual grammar correction and predictive sentence completion.",
        "My contributions focused on introducing two new writing capabilities and improving the chatbot experience, helping users write more confidently, correct errors more effectively, and interact with AI more reliably.",
      ],
    },
  
    {
      slug: "productivity-tracker",
      title: "Productivity Tracker",
      subtitle: "Employee Activity & Performance Management",
      tags: ["Productivity Analytics", "Campaign Management", "Time Tracking"],
      overview: [
        "Productivity Tracker is a centralized platform for managing campaign-based work, tracking employee activity, and monitoring ticket-level productivity.",
        "Employees can access assigned campaigns, complete form-based tickets, track the time spent on individual tasks, and manage break sessions. Managers can use a consolidated dashboard to monitor ongoing activities, completed tickets, working time, and employee productivity.",
        "A key technical aspect of the platform is its time-tracking accuracy, ensuring that activity metrics align with each user's local time zone, whether they are working in India, Europe, America, or other regions.",
      ],
      challenge: [
        "Tracking employee productivity across different campaigns requires accurate activity timestamps, reliable duration calculations, and a clear separation between productive time, general activity time, and break time.",
        "Time-zone differences introduce additional complexity when users work from different regions. Inconsistent timestamp handling can lead to incorrect activity durations and discrepancies in productivity reports.",
        "The objective was to provide structured task management, reliable time-based metrics, and a centralized view of employee activity.",
      ],
      contributions: [
        {
          title: "Campaign & Ticket Management",
          intro:
            "Built interfaces that organize employee activities around campaigns and their associated tickets.",
          points: [
            "Supports multiple campaigns and their task workflows.",
            "Displays ticket requirements, instructions, and attached information.",
            "Enables employees to perform form-based tasks through a structured interface.",
            "Presents ticket status and progress in an accessible workflow.",
          ],
        },
        {
          title: "Precision Time & Activity Tracking",
          intro:
            "Implemented time-tracking interfaces and metric handling for individual ticket activities.",
          points: [
            "Starts and tracks activity when an employee begins working on a ticket.",
            "Displays elapsed time for the active task.",
            "Supports precise duration calculations at millisecond resolution.",
            "Aligns timestamp interpretation with the relevant user's local time zone.",
            "Supports consistent activity reporting across users working in different geographical regions.",
          ],
          example:
            "For example, an employee in India and another in Europe or America can view activity metrics in their respective local time contexts while the system maintains consistent duration calculations.",
          note: "Key technical focus: millisecond-resolution time measurement and time-zone-aware activity reporting, rather than relying on simple clock-time differences.",
        },
        {
          title: "Productivity Dashboard",
          intro:
            "Developed dashboard interfaces that bring ticket progress and employee activity metrics together.",
          points: [
            "Displays total tickets handled and completed.",
            "Presents activity time and productive time.",
            "Shows the employee's current ticket and ongoing activity.",
            "Summarizes work progress and time utilization.",
            "Makes activity information accessible to managers through a centralized view.",
          ],
        },
        {
          title: "Break Session Management",
          intro:
            "Implemented interfaces for managing and tracking employee breaks.",
          points: [
            "Allows employees to start and manage break sessions.",
            "Tracks the number of breaks taken and their durations.",
            "Presents total break time alongside work activity metrics.",
            "Supports clearer reporting of working time versus break time.",
          ],
        },
      ],
      outcome: [
        "Productivity Tracker provides a unified view of campaign execution, ticket progress, employee activity, and time utilization.",
        "My contribution focused on the interactive productivity interfaces and reliable time-tracking experience, with particular attention to time-zone handling and precise duration calculations. These capabilities support more consistent reporting for distributed teams and give managers better visibility into ongoing work.",
      ],
    },
  
    {
      slug: "translate-buddy",
      title: "Translate Buddy",
      subtitle: "Multi-Engine Translation Assistant",
      tags: [
        "Browser Extension",
        "Multilingual Translation",
        "Performance Optimization",
      ],
      overview: [
        "Translate Buddy is a browser-based translation assistant that allows users to translate selected text across multiple languages without leaving their current webpage.",
        "The platform supports contextual translation popups, a translation-results sidebar, and a dedicated translator panel. Users can compare multiple translation outputs, review backend-provided accuracy scores, measure response times, and rate individual results.",
        "My contribution focused on improving the translation experience, presenting translation comparisons clearly, and optimizing frontend initialization so the extension's interfaces become available more consistently across webpages.",
      ],
      challenge: [
        "The existing translation experience had two major limitations: translation quality was inconsistent, and frontend components could take several seconds to initialize on certain webpages.",
        "Users needed a convenient way to translate selected text, compare outputs from different translation engines, and evaluate results without switching between applications. At the same time, the extension needed to handle different webpage DOM structures efficiently, avoiding delays when opening popups and sidebars.",
      ],
      contributions: [
        {
          title: "Contextual Translation Across Webpages",
          intro:
            "Developed an integrated translation experience that works within supported webpage interfaces.",
          points: [
            "Detects user-selected text and presents a contextual translation popup.",
            "Displays available target languages based on campaign configuration.",
            "Shows translated output in a sidebar within the current webpage.",
            "Allows users to access translation functionality without navigating away from the source content.",
          ],
        },
        {
          title: "Multi-Engine Translation Comparison",
          intro:
            "Built a centralized interface for reviewing and evaluating multiple translation results.",
          points: [
            "Displays translated outputs from multiple available translation engines.",
            "Presents accuracy scores supplied by the backend.",
            "Shows the time taken to generate each translation.",
            "Supports individual five-point ratings for translation results.",
            "Enables users to compare multiple outputs and identify preferred translations.",
          ],
          example:
            "For example, users can review 10–15 translation results, compare their displayed accuracy and response times, and rate each result independently.",
          note: "Important distinction: translation accuracy is supplied by the backend. The frontend contribution is the integration and presentation of this information alongside translation results and user ratings.",
        },
        {
          title: "Dedicated Open Translator Panel",
          intro:
            "Implemented a standalone translation workspace for users who need more flexibility.",
          points: [
            "Provides an input area for source text.",
            "Displays available target languages through a language selector.",
            "Presents translated text in a dedicated output area.",
            "Shows the corresponding backend-provided accuracy information.",
            "Enables users to perform translations without selecting text from the webpage first.",
          ],
        },
        {
          title: "Frontend Performance Optimization",
          intro:
            "Improved the responsiveness of the extension by addressing slow DOM-based initialization and inefficient component loading.",
          points: [
            "Optimized DOM-based initialization across supported webpage structures.",
            "Improved the loading behavior of translation popups, sidebars, and related interface components.",
            "Applied lazy-loading techniques where appropriate to avoid unnecessary initial work.",
            "Refined component initialization to make translation controls available more consistently across different webpages.",
            "Focused on reducing perceived loading delays and improving the overall responsiveness of the extension.",
          ],
          example:
            "Previously, some webpages experienced delays of approximately 5–10 seconds before the translation interface became available. My optimization work focused on reducing these delays and making the experience more consistent.",
        },
      ],
      outcome: [
        "Translate Buddy provides a more integrated and responsive translation experience, combining contextual translation, multi-engine comparison, accuracy indicators, response-time information, and user feedback.",
        "My frontend contributions focused on making translation tools easier to access, improving the presentation of translation results, and optimizing DOM-related initialization across supported webpages. The result is a more streamlined translation workflow that helps users compare available translations and evaluate their quality without interrupting their browsing experience.",
      ],
    },
  
    // Add a new project here. Fields: slug, title, subtitle, tags, overview,
    // challenge, contributions (title, intro, points, example?, note?, result?), outcome
  ];