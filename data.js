/*
 * Site content. Edit this file to update the page (resume details go here).
 * Rendered by script.js into the About, Skills and Projects sections.
 */
window.SITE = {
  profile: {
    name: 'Shreyas Kakkar',
    // Typewriter cycle in the hero
    roles: ['Shreyas Kakkar', 'ML Engineer', 'Problem Solver', 'Code. Ship. Repeat.'],
    tagline: 'AI Engineering student & ML researcher',
    summary:
      'I build machine learning systems and the tools around them: sentiment-driven stock forecasting, a math whiteboard that reads handwriting, and a retrieval pipeline for earnings calls.',
    email: 'shreyaskakkar@gmail.com',
    github: 'https://github.com/ShreyasK06',
    linkedin: 'https://www.linkedin.com/in/shreyaskakkar/',
    introWords: 'ERROR 404: Conventional developer not found.',
  },

  about: {
    paragraph:
      "I'm an AI Engineering student at Penn State (class of 2028) who likes building machine learning systems end to end, from the model to the interface people actually use. My research applies acoustic-emission signal processing and CNNs to classify CNC milling parameters, and my projects range from sentiment-driven stock forecasting to a whiteboard that recognises handwritten math.",
    details: [
      { icon: 'mail', label: 'Email', value: 'shreyaskakkar@gmail.com' },
      { icon: 'github', label: 'GitHub', value: '@ShreyasK06' },
      { icon: 'school', label: 'Education', value: 'AI Engineering, Penn State' },
    ],
    areas: [
      'Machine Learning', 'Computer Vision', 'NLP', 'Time-Series Forecasting',
      'Signal Processing', 'Full-Stack Web', 'Python', 'React',
    ],
    sideTitle: 'Education & Research',
    side: [
      { title: 'B.Eng. AI Engineering', place: 'The Pennsylvania State University', left: 'Sep 2024 to May 2028', right: 'In progress' },
      { title: 'Undergraduate ML Research', place: 'Penn State, Dept. of Science and Technology', left: 'CNC milling parameter classification: CWT scalograms + CNNs', right: 'Apr 2026 to now' },
      { title: 'Certifications', place: 'Oracle OCI Generative AI Professional, Oracle OCI AI Foundations, Google AI Professional', left: '2025', right: '' },
    ],
  },

  skills: [
    {
      id: 'languages', label: 'Languages', icon: 'code',
      items: [
        { name: 'Python', icon: 'python' }, { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' }, { name: 'Java', icon: 'java' },
        { name: 'C++', icon: 'cplusplus' }, { name: 'SQL', icon: '' },
        { name: 'Dart', icon: 'dart' }, { name: 'R', icon: 'r' },
        { name: 'HTML / CSS', icon: 'html5' },
      ],
    },
    {
      id: 'ml', label: 'ML & Data', icon: 'brain',
      items: [
        { name: 'PyTorch', icon: 'pytorch' }, { name: 'TensorFlow', icon: 'tensorflow' },
        { name: 'LightGBM', icon: '' },
        { name: 'OpenCV', icon: 'opencv' }, { name: 'MediaPipe', icon: '' },
        { name: 'Pandas', icon: 'pandas' }, { name: 'NumPy', icon: 'numpy' },
        { name: 'scikit-learn', icon: 'scikitlearn' },
      ],
    },
    {
      id: 'web', label: 'Web & Mobile', icon: 'layout',
      items: [
        { name: 'React', icon: 'react' }, { name: 'Node.js', icon: 'nodejs' },
        { name: 'FastAPI', icon: 'fastapi' }, { name: 'Flutter', icon: 'flutter' },
        { name: 'REST APIs', icon: '' },
      ],
    },
    {
      id: 'tools', label: 'Tools', icon: 'wrench',
      items: [
        { name: 'Git', icon: 'git' }, { name: 'Docker', icon: 'docker' },
        { name: 'Render', icon: '' }, { name: 'Linux', icon: 'linux' },
        { name: 'GitHub Actions', icon: 'githubactions' },
      ],
    },
  ],

  // colors: [light, dark] feed the card's radial gradient; visual picks the CSS preview.
  projects: [
    {
      title: 'MathBoard: Handwritten Math, Solved Step by Step',
      name: 'MathBoard', colors: ['#6a5acd', '#14235c'], visual: 'mathboard',
      desc: 'Draw an equation on a canvas and get a symbolic solution back.',
      bullets: [
        'Handwriting is read by a locally trained CNN, with Gemini as the OCR fallback, then converted to LaTeX.',
        'A SymPy solver is cross-checked by an R Plumber/Ryacas sidecar, with a check mark when the two agree.',
        'An R Shiny dashboard shows live request stats and the classifier\'s confusion matrix.',
      ],
      tech: ['React', 'Python', 'FastAPI', 'SymPy', 'R'],
      link: 'https://github.com/ShreyasK06/mathboard',
      demo: 'https://shreyask06.github.io/mathboard/',
    },
    {
      title: 'Chess Puzzles: A Browser Chess App With a Custom Engine',
      name: 'Chess Puzzles', colors: ['#f87171', '#7f1d1d'], visual: 'chess',
      desc: 'A browser chess app with five AI difficulty levels, daily puzzles, Chess960 and a position playground.',
      bullets: [
        'Custom-written JavaScript chess engine, with no build step and fully client-side.',
        'Daily puzzles checked against stored solutions, plus Chess960 and one-click openings.',
      ],
      tech: ['JavaScript', 'Chess Engine', 'Web Workers'],
      link: 'https://github.com/ShreyasK06/chessPuzzlesJS',
      demo: 'https://shreyask06.github.io/chessPuzzlesJS/',
    },
    {
      title: 'Sentiment Stock Analysis: Financial News Sentiment and Forecasting',
      name: 'Sentiment Stock Analysis', colors: ['#38bdf8', '#0c4a6e'], visual: 'stock',
      desc: 'Financial-news sentiment models feeding a multi-horizon forecasting pipeline, evaluated against majority-class baselines.',
      bullets: [
        'Fine-tuned DistilBERT sentiment classifier: 87% validation accuracy, 82.5% on the held-out test split and 85.4% in 5-fold CV.',
        'FinBERT-scored headlines feed a Temporal Fusion Transformer with 1, 3, 5 and 7-day quantile forecasts.',
        'The live demo is a working tool: paste headlines and the fine-tuned model scores them in your browser through ONNX Runtime.',
      ],
      tech: ['Python', 'PyTorch', 'FinBERT', 'Transformers', 'ONNX Runtime', 'Next.js'],
      link: 'https://github.com/ShreyasK06/SentimentStockPredictorModel',
      demo: 'https://shreyask06.github.io/SentimentStockPredictorModel/',
    },
    {
      title: 'Earnings Whisper: Grounded Trading Signals From Earnings Filings',
      name: 'Earnings Whisper', colors: ['#34d399', '#064e3b'], visual: 'whisper',
      desc: 'A RAG system over SEC 8-K earnings filings that generates cited trading signals and backtests them.',
      bullets: [
        'Hybrid retrieval with cross-encoder reranking: Recall@5 of 0.638 on a 47-question golden set.',
        'LLM signal generation with enforced citations and a faithfulness judge.',
        'Backtested against realized returns: 48.4% hit rate on 64 directional signals, an honest null result.',
      ],
      tech: ['Python', 'RAG', 'Qdrant', 'FastAPI', 'React'],
      link: 'https://github.com/ShreyasK06/EarningsWhisper',
      demo: 'https://shreyask06.github.io/EarningsWhisper/',
    },
    {
      title: 'Delphi: A Budgeting and Financial-Literacy App for College Students',
      name: 'Delphi', colors: ['#f59e0b', '#78350f'], visual: 'delphi',
      desc: 'A budgeting web app that turns a student\'s own numbers into a plan, with an AI coach grounded in it.',
      bullets: [
        'Financial Health Score, budget builder, debt payoff planner (avalanche vs snowball) and savings goals.',
        'AI coach on NVIDIA Nemotron through a FastAPI backend, plus live market data for the Investing page.',
        'No bank logins: Supabase auth and a two-minute setup.',
      ],
      tech: ['React', 'TypeScript', 'Supabase', 'FastAPI', 'Tailwind'],
      link: 'https://github.com/ShreyasK06/delphi',
      demo: 'https://shreyask06.github.io/delphi/',
    },
    {
      title: 'Personal Health Coach: A Whoop-Style Dashboard on Apple Health Data',
      name: 'Personal Health Coach', colors: ['#e879f9', '#4a044e'], visual: 'health',
      desc: 'A single-user dashboard that turns Apple Watch data into daily recovery, sleep and strain scores against your own rolling baseline.',
      bullets: [
        'Scoring engines for recovery, sleep, strain and training load, written as pure unit-tested functions.',
        'Acute vs chronic load (ACWR), sleep debt, and a rules-based coach with a pluggable LLM endpoint.',
        'Reads Health Auto Export data through Firebase, with a synthetic demo mode.',
      ],
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Firebase'],
      link: 'https://github.com/ShreyasK06/personal-health-coach',
      demo: 'https://shreyask06.github.io/personal-health-coach/?demo=1',
    },
    {
      title: 'LLM Attribution: Which Model Wrote This Text?',
      name: 'LLM Attribution', colors: ['#facc15', '#713f12'], visual: 'llm',
      desc: 'A classifier that identifies which of five chat models generated a response, built on the RAID benchmark.',
      bullets: [
        'TF-IDF + logistic regression reaches 78.7% test accuracy against 20% chance; TextCNN gets 76.3% and BiLSTM 73.8%.',
        'Splits by source prompt with cluster-bootstrap confidence intervals, so no prompt leaks between train and test.',
        'Leave-one-domain-out accuracy drops to about 40-46%, showing how domain-specific the signal is.',
      ],
      tech: ['Python', 'PyTorch', 'scikit-learn', 'NLP'],
      link: 'https://github.com/ShreyasK06/CMPSC448Project1',
    },
    {
      title: 'Fridge Chef: Turn a Photo of Your Fridge Into Dinner',
      name: 'Fridge Chef', colors: ['#fb923c', '#7c2d12'], visual: 'fridge',
      desc: 'Take a photo of your fridge and get three recipes back.',
      bullets: [
        'Google Cloud Vision detects the ingredients, which you can edit as chips before generating.',
        'Gemini 2.5 Flash returns three full recipes with timings and steps.',
        'FastAPI backend with a web frontend and a Flutter Android app, covered by 17 tests.',
        'The live demo runs on sample data (no API calls); run the backend locally for real detection.',
      ],
      tech: ['Python', 'FastAPI', 'Flutter', 'Gemini', 'Cloud Vision'],
      link: 'https://github.com/ShreyasK06/FridgeChef',
      demo: 'https://shreyask06.github.io/FridgeChef/',
    },
    {
      title: 'Camera Whiteboard: Draw in the Air With Your Finger',
      name: 'Camera Whiteboard', colors: ['#a78bfa', '#4c1d95'], visual: 'camwb',
      desc: 'A marker-free whiteboard driven by your webcam.',
      bullets: [
        'MediaPipe hand tracking turns your fingertip into a pen.',
        'Strokes appear on-screen as you draw in the air, with a colour palette.',
        'Runs on the desktop or in the browser: a Streamlit app streams your webcam over WebRTC.',
      ],
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit'],
      link: 'https://github.com/ShreyasK06/cameraWhiteboardPy',
      demo: 'https://shreyask06-camerawhiteboard.streamlit.app/',
    },
    {
      title: 'License Plate Recognition: Finding and Reading Plates in Photos',
      name: 'License Plate Recognition', colors: ['#2dd4bf', '#134e4a'], visual: 'plate',
      desc: 'Locates the plate in a car photo with classical image processing, then reads it with Tesseract OCR.',
      bullets: [
        'Otsu thresholding and connected-region filtering (aspect ratio and area) isolate plate candidates.',
        'The sharpened crop is upscaled 6x and read in three Tesseract modes, keeping the highest-confidence result.',
        'A Streamlit app shows the candidates, the OCR crop and the confidence score.',
      ],
      tech: ['Python', 'scikit-image', 'OpenCV', 'Tesseract', 'Streamlit'],
      link: 'https://github.com/ShreyasK06/LincensePlateRecogPy',
      demo: 'https://shreyask06-plate-detection.streamlit.app/',
    },
    {
      title: 'Stock Tips: A Real-Time Market Dashboard With AI Analysis',
      name: 'Stock Tips', colors: ['#4ade80', '#14532d'], visual: 'tips',
      desc: 'A market dashboard combining live stock data, economic indicators, crypto tracking and news.',
      bullets: [
        'Pulls real-time quotes and market news through Finnhub and other financial APIs.',
        'AI-powered stock analysis through OpenAI, with Recharts visualizations.',
      ],
      tech: ['React', 'Recharts', 'Finnhub', 'OpenAI'],
      link: 'https://github.com/ShreyasK06/stockTip',
      demo: 'https://shreyask06.github.io/stockTip/',
    },
    {
      title: 'Checker AI: A Minimax Checkers Opponent',
      name: 'Checker AI', colors: ['#f472b6', '#831843'], visual: 'checkers',
      desc: 'A Checkers game with an AI opponent powered by the Minimax algorithm.',
      bullets: [
        'Minimax search at depth 3 over every legal move, including multi-jump capture chains (about 380 positions per move from the opening, measured).',
        'Pygame interface for playing against the computer, compiled to WebAssembly with pygbag so it runs in the browser.',
      ],
      tech: ['Python', 'Pygame', 'Minimax', 'pygbag'],
      link: 'https://github.com/ShreyasK06/checkerAiPy',
      demo: 'https://shreyask06.github.io/checkerAiPy/',
    },
  ],
};
