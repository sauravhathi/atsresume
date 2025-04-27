const DefaultResumeData = {
  name: "Muhammad Umair Javaid",
  position: "AI Engineer",
  contactInformation: "+923234965395",
  email: "1.umairjavaid@gmail.com",
  address: "Lahore, Pakistan",
  profilePicture: "", // Added missing profilePicture field
  socialMedia: [
    {
      socialMedia: "Github",
      link: "github.com/umairjavaid",
    },
    {
      socialMedia: "LinkedIn",
      link: "www.linkedin.com/in/muhammad-umair-javaid-02173096/",
    },
    {
      socialMedia: "",
      link: "",
    },
  ],
  summary: "Experienced Machine Learning Engineer and Software Infrastructure Specialist, focused on building retrieval-augmented AI systems, optimizing models, and deploying low-latency, real-time solutions. Skilled in ML pipelines, MLOps, DevOps, system design, and best practices like metrics-driven, behavior-driven, and test-driven development to deliver scalable and resilient machine learning systems",
  education: [
    {
      school: "Bachelor of Computer Science",
      degree: "Information Technology University of Punjab",
      startYear: "2020-08-20",
      endYear: "2024-07-01",
    },
  ],
  workExperience: [
    {
      company: "Visionet Systems ltd",
      position: "Senior Data Science Consultant",
      description: "Visionet systems is a consultation company",
      keyAchievements: "RAG Implementation for Industry Documents - Designed and implemented a Retrieval-Augmented Generation (RAG) system using Amazon Bedrock, Pinecone, and LangChain, achieving a production-standard accuracy of 93%, which enhanced data retrieval and improved contextual AI response accuracy for industry documents. <a href='https://example.com/rag' target='_blank' rel='noopener noreferrer'>[Link to RAG project]</a>\nChurn Prediction for Telecommunications - Enhanced model quality through extensive regression testing, parameter tuning, and CI/CD integration using Azure DevOps and Azure Automated ML, predicting 7% more churn cases and reducing customer churn by 15%. <a href='https://example.com/churn' target='_blank' rel='noopener noreferrer'>[Link to Churn analysis]</a>\nIdentity Graph Management and Product Recommendation System - Developed and deployed an advanced solution for identity graph management and product recommendation leveraging AWS services (Neptune, Personalize, S3, Glue, API Gateway, Lambda, SageMaker, CloudWatch), successfully clustering 85% of users accurately and increasing sales by 12% through personalized recommendations",
      startYear: "2024-02-16",
      endYear: "",
    },
    {
      company: "Unify",
      position: "Machine Learning Engineer",
      description: "Unify company is a jlkjlkjlkjlkjbhjvgh",
      keyAchievements: "Implemented Decision Tree Classifier in Ivy frontend API inspired from HummingBird - achieved a 10x inference time speed up over Sklearn using GPU-parallelizable tree traversal algorithms with Jax Jit compilation. Link\nFixed critical bugs that caused the frontend and transpiler unit tests in CI/CD, Github Actions, to fail for certain frameworks: Link1, Link2\nImplemented unsupported functions in Ivy to enhance code quality, promote collaboration, and advance software development skills through unit testing and continuous integration. Link1, Link2\nProfiled Generative AI(Stable Diffusion) models to identify transpilation bottlenecks using Nvidia Nsight",
      startYear: "2023-02-22",
      endYear: "2023-03-09",
    },
    {
      company: "Aletheia AI",
      position: "Deep Learning Engineer",
      description: "Aletheia(Bricks and mortar)",
      keyAchievements: "Automated industrial truck tracking using Object Detection, Object Tracking, and Text Recognition, optimizing efficiency with 91% accuracy despite diverse truck sizes and non-standardized Pakistani number plates\nCurated diverse datasets with LabelBox, fine-tuned PyTorch, TensorFlow, and PaddlePaddle models, and implemented MLOps practices via Weights & Biases for streamlined automated data capture, analysis, and enhanced efficiency\nAccelerated deep learning models with OpenVino, Nimble, TensorRT, and XLA ensuring efficient inference on CPU and GPUs by optimizing precision, layer fusion, and leveraging the power of concurrent processing for improved real-time performance\nDeveloped a real-time microservices system, low latency and high throughput, utilizing Redis for inter-module communication, with live database updates using SQLite and Flask\nAddressed DevOps considerations such as orchestration, security, monitoring, resource optimization, fault tolerance, and implemented a versioning strategy for updates and rollbacks in the system using Docker, Docker compose and Grafana\nTransformed Python stack into multi-threaded C++ with resource optimization for deployment on Mobile embedded devices (Nvidia Jetson Nano 2gb/4gb) and x86-64 devices",
      startYear: "2023-02-22",
      endYear: "2023-03-09",
    },
  ],
  projects: [
    {
      name: "AI-Powered Resume Builder",
      link: "https://github.com/sauravhathi/atsresume",
      description: "Developed an AI-powered resume builder application using Next.js, Tailwind CSS, and OpenAI API.",
      keyAchievements: "Implemented AI features for resume analysis and suggestions. <a href='https://example.com/ai-feature' target='_blank' rel='noopener noreferrer'>[AI Feature Demo]</a>\nIntegrated OpenAI API for generating resume content based on user input.",
      startYear: "2023-01-01",
      endYear: "2023-06-30",
    },
  ],
  skills: [
    {
      title: "Technical Skills",
      skills: [
        "Python", "C++", "C", "Java", "Dart", "Pytorch", "Tensorflow", "JAX", "PaddlePaddle", "scikit-learn", "XGBoost", "Numpy", "Scipy", "spaCy", "matplotlib", "pandas", "AWS", "Azure", "Azure DevOPS", "AWS Bedrock", "Databricks", "Weights & Biases", "Hugging Face", "TensorBoard", "AWS Sagemaker", "Git", "Docker", "Docker Compose", "Grafana", "SQLite", "Redis", "Github Actions", "Nvidia Nsight", "sphinx", "Flake8", "Flask", "Gstreamer", "ONNX", "TensorRT", "Nvidia DeepStream", "Git", "VScode", "EKS", "LangChain", "Github", "PineCone",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Collaboration", "Problem-solving", "Communication", "Time management", "Result-oriented",
      ],
    },
    {
      title: "Additional Skills",
      skills: [
        "Public Speaking", "Writing", "Research", "Test-Driven developement", "Behavior-Driven Development", "Metrics-Driven Development",
      ],
    },
  ],
  languages: [
    "English",
    "Hindi",
    "Urdu",
    "Punjabi",
  ],
  certifications: [
    "LangChain Mastery: Develop LLM Apps with LangChain, Pinecode, OpenAI and Gemini - Udemy",
    "Azure Machine Leanring & MLOps: Beginner to Advance - Udemy",
    "LLMs Mastery: Complete Guide to Transformers & Generative AI - Udemy",
  ],
};

export default DefaultResumeData;