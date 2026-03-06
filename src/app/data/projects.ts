export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  longDescription: string;
  tech: string[];
  gradient: string;
  videoUrl?: string;
  demoUrl?: string;
  sourceUrl?: string;
  images: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  features: string[];
  timeline: string;
  teamSize?: string;
}

export const projectsData: Project[] = [
  {
    id: 'email-spam-detection',
    title: 'Spam Email Classifier',
    shortDescription: 'Production-level ML model classifying emails as spam/ham with 98%+ accuracy using Scikit-learn and Streamlit',
    fullDescription: 'An end-to-end NLP solution for email spam detection combining TF-IDF feature engineering, machine learning algorithms (Naive Bayes & Logistic Regression), and a user-friendly Streamlit web application.',
    longDescription: `A comprehensive production-level NLP project that solves the real-world problem of email spam detection. This system processes the Kaggle SMS Spam Collection dataset (5,572 messages) and trains machine learning models to classify emails as spam or legitimate with exceptional accuracy.

The project implements a complete ML pipeline: from raw text data preprocessing and cleaning, through advanced TF-IDF vectorization for feature engineering, to model training and evaluation. Two models are compared (Naive Bayes and Logistic Regression), with Logistic Regression achieving 98-99% accuracy and an F1 score of 0.9641.

The system is deployed as a live web application using Streamlit, allowing users to input emails in real-time and get instant spam/ham predictions. The architecture includes data preprocessing, feature engineering, model training, and prediction modules all designed for production deployment.`,
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'TF-IDF', 'Streamlit', 'Kaggle', 'Matplotlib', 'Seaborn'],
    gradient: 'from-orange-500 to-red-600',
    demoUrl: 'https://email-spam-detection-6buvueq6rcqp2xjtp7o2uo.streamlit.app/',
    sourceUrl: 'https://github.com/Gulfam-Amjad/email-spam-detection',
    images: [
      'https://images.unsplash.com/photo-1578807352052-ba3646ba9e11?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555066931-4365d440a117?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    ],
    challenges: [
      'Handling imbalanced dataset: 747 spam vs 4,825 legitimate emails (13% vs 87%)',
      'Text preprocessing: managing abbreviations, special characters, and diverse email formats',
      'Feature engineering: converting raw text to numerical format for ML algorithms',
      'Model selection and hyperparameter tuning for optimal accuracy',
      'Achieving robust predictions across different email types and spam variations',
    ],
    solutions: [
      'Applied data preprocessing techniques: lowercasing, stopword removal, tokenization',
      'Implemented TF-IDF (Term Frequency-Inverse Document Frequency) vectorization with 5,000-word vocabulary',
      'Trained and compared two classification models: Naive Bayes and Logistic Regression',
      'Used k-fold cross-validation and evaluated with accuracy, precision, recall, and F1 scores',
      'Deployed best model (Logistic Regression) to production with Streamlit web interface',
    ],
    results: [
      'Naive Bayes: 97-98% accuracy, ~93-95% F1 score',
      'Logistic Regression (DEPLOYED): 98-99% accuracy with F1 score of 0.9641',
      'Successfully classifies 5,572 email samples with high precision and recall',
      'Real-time prediction latency: <500ms per email',
      'Live demo deployed on Streamlit Cloud with public access',
    ],
    features: [
      'Real-time email classification (spam vs ham)',
      'Confidence scores for predictions',
      'Text preprocessing pipeline with multiple cleaning techniques',
      'TF-IDF feature extraction and vectorization',
      'Model training and evaluation framework',
      'Interactive web interface for easy testing',
      'Model comparison visualization (Naive Bayes vs Logistic Regression)',
      'Confusion matrix and performance metrics visualization',
      'Support for batch prediction and API testing',
      'Unit tests for prediction functions',
    ],
    timeline: '2 weeks',
    teamSize: 'Solo Project',
  },
];
