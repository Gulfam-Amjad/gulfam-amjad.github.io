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
    id: 'predictive-analytics',
    title: 'Predictive Analytics Dashboard',
    shortDescription: 'Built a comprehensive ML dashboard for predicting customer behavior',
    fullDescription: 'A comprehensive machine learning dashboard for predicting customer behavior using advanced regression and classification models.',
    longDescription: `This project showcases a complete end-to-end ML pipeline for customer behavior prediction. The dashboard integrates data preprocessing, model training, evaluation, and real-time prediction capabilities. It uses advanced ensemble methods to achieve high accuracy and reliability.

The application provides interactive visualizations of customer segments, behavior patterns, and predictive insights. Business stakeholders can use this tool to make data-driven decisions about marketing strategies and resource allocation.`,
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Flask', 'PostgreSQL', 'React'],
    gradient: 'from-cyan-500 to-blue-600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    demoUrl: '#',
    sourceUrl: '#',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=600&fit=crop',
    ],
    challenges: [
      'Handling imbalanced dataset with 95% negative samples',
      'Processing 10GB+ of raw customer data efficiently',
      'Maintaining model accuracy while ensuring interpretability',
      'Real-time prediction performance with sub-second latency',
    ],
    solutions: [
      'Implemented SMOTE and class weights for balanced training',
      'Used distributed processing and data sampling techniques',
      'Applied SHAP values for model explainability',
      'Optimized model serving with caching and batch processing',
    ],
    results: [
      '94% accuracy on test dataset',
      '2.5x improvement in customer targeting ROI',
      '50ms average prediction latency',
      'Deployed to production serving 100K+ daily predictions',
    ],
    features: [
      'Real-time customer behavior prediction',
      'Interactive data visualization dashboard',
      'Model performance monitoring and alerting',
      'A/B testing framework for strategies',
      'Export reports and insights',
      'API for third-party integration',
    ],
    timeline: '6 months',
    teamSize: '4 people',
  },
  {
    id: 'image-classification',
    title: 'Image Classification System',
    shortDescription: 'Deep learning model for image classification with high accuracy',
    fullDescription: 'A state-of-the-art deep learning system for classifying images across multiple categories using convolutional neural networks.',
    longDescription: `This advanced image classification system leverages transfer learning and fine-tuning on pre-trained models like ResNet and EfficientNet to achieve state-of-the-art results. The system is optimized for both accuracy and inference speed.

Features include real-time image processing, batch prediction capabilities, and a user-friendly web interface for uploading and analyzing images. The model has been trained on diverse datasets and can handle various image conditions and orientations.`,
    tech: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'OpenCV', 'FastAPI', 'Docker'],
    gradient: 'from-purple-500 to-pink-600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    demoUrl: '#',
    sourceUrl: '#',
    images: [
      'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    ],
    challenges: [
      'Achieving high accuracy across diverse image types',
      'Reducing model size for mobile deployment',
      'Handling edge cases and ambiguous images',
      'Implementing efficient batch processing',
    ],
    solutions: [
      'Used ensemble of multiple pre-trained models',
      'Applied quantization and pruning techniques',
      'Added confidence thresholds and manual review queues',
      'Implemented async processing with message queues',
    ],
    results: [
      '97.5% top-1 accuracy on test set',
      '50MB model size (from 500MB)',
      '10ms inference time per image',
      'Processed 1M+ images in production',
    ],
    features: [
      'Multi-class image classification',
      'Confidence scores and uncertainty estimates',
      'Real-time predictions via REST API',
      'Batch processing capabilities',
      'Model versioning and rollback',
      'Batch download results',
    ],
    timeline: '5 months',
    teamSize: '3 people',
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis Tool',
    shortDescription: 'NLP tool for analyzing sentiment from social media data',
    fullDescription: 'An advanced NLP-based sentiment analysis tool designed to process and analyze social media data at scale.',
    longDescription: `This comprehensive sentiment analysis platform processes text data from multiple social media sources (Twitter, Reddit, etc.) to extract actionable insights about brand perception and customer sentiment.

The system handles various challenges including emojis, slang, multiple languages, and context-dependent meanings. It provides real-time sentiment tracking, trend analysis, and actionable recommendations for business improvement.`,
    tech: ['Python', 'NLTK', 'Transformers', 'Pandas', 'Scrapy', 'Elasticsearch', 'Kibana'],
    gradient: 'from-orange-500 to-red-600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    demoUrl: '#',
    sourceUrl: '#',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-adf4e566c539?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    ],
    challenges: [
      'Processing sarcasm and context-dependent sentiment',
      'Handling non-English text and dialects',
      'Real-time processing of streaming data',
      'Privacy concerns with social media data',
    ],
    solutions: [
      'Fine-tuned BERT models for nuanced understanding',
      'Multi-language support with translation',
      'Apache Kafka for stream processing',
      'Data anonymization and GDPR compliance',
    ],
    results: [
      '89% accuracy on complex sentiment cases',
      'Real-time processing of 100K+ tweets/day',
      'Support for 15+ languages',
      'Actionable insights for 50+ brands',
    ],
    features: [
      'Real-time sentiment tracking',
      'Social media data scraping',
      'Multi-language support',
      'Trend and pattern detection',
      'Custom alert system',
      'Competitive benchmarking',
    ],
    timeline: '5.5 months',
    teamSize: '4 people',
  },
  {
    id: 'sales-forecasting',
    title: 'Sales Forecasting Model',
    shortDescription: 'Time series forecasting model for predicting sales trends',
    fullDescription: 'An advanced time series forecasting model designed to predict future sales trends and optimize inventory management.',
    longDescription: `This sophisticated forecasting system combines classical time series methods (ARIMA, Exponential Smoothing) with modern deep learning approaches (LSTM, Transformer) to provide accurate sales predictions.

The model accounts for seasonality, trends, holidays, and external factors to generate reliable forecasts. It includes confidence intervals, anomaly detection, and what-if analysis capabilities for strategic planning.`,
    tech: ['Python', 'Prophet', 'Pandas', 'Statsmodels', 'TensorFlow', 'Plotly', 'PostgreSQL'],
    gradient: 'from-green-500 to-teal-600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    demoUrl: '#',
    sourceUrl: '#',
    images: [
      'https://images.unsplash.com/photo-1460925895917-adf4e566c539?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&h=600&fit=crop',
    ],
    challenges: [
      'Handling irregular seasonality patterns',
      'Dealing with sudden market shifts',
      'Incorporating external events (holidays, promotions)',
      'Managing multiple product categories',
    ],
    solutions: [
      'Developed custom seasonality models',
      'Implemented change-point detection',
      'Created event calendar system',
      'Built hierarchical forecasting framework',
    ],
    results: [
      '12% MAPE (Mean Absolute Percentage Error)',
      '95% prediction accuracy within tolerance',
      '$2M inventory optimization savings',
      'Reduced stock-outs by 40%',
    ],
    features: [
      'Automatic seasonal decomposition',
      'Holiday and event handling',
      'Confidence interval predictions',
      'What-if analysis scenarios',
      'Anomaly detection',
      'Automatic model selection',
    ],
    timeline: '4 months',
    teamSize: '3 people',
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation',
    shortDescription: 'K-means clustering for customer segmentation and marketing',
    fullDescription: 'Advanced customer segmentation using machine learning to identify distinct customer groups for targeted marketing.',
    longDescription: `This customer segmentation solution uses multiple clustering algorithms (K-means, Hierarchical, DBSCAN) to identify distinct customer groups based on behavior, demographics, and value metrics.

The platform provides actionable customer personas, targeting recommendations, and ROI analysis for each segment. It enables personalized marketing campaigns and resource optimization.`,
    tech: ['Python', 'Scikit-learn', 'Matplotlib', 'NumPy', 'Seaborn', 'Tableau', 'AWS'],
    gradient: 'from-blue-500 to-indigo-600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    demoUrl: '#',
    sourceUrl: '#',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    ],
    challenges: [
      'Determining optimal number of clusters',
      'Handling high-dimensional data',
      'Maintaining segment stability over time',
      'Validating segment business relevance',
    ],
    solutions: [
      'Used elbow method and silhouette analysis',
      'Applied dimensionality reduction (PCA)',
      'Implemented rolling window validation',
      'Created business metric correlation analysis',
    ],
    results: [
      '8 distinct, actionable customer segments',
      '40% increase in campaign ROI',
      '25% improvement in customer retention',
      'Silhouette score of 0.68',
    ],
    features: [
      'Automatic cluster optimization',
      'Customer persona generation',
      'Segment visualization dashboards',
      'RFM analysis',
      'Churn prediction by segment',
      'Targeted campaign recommendations',
    ],
    timeline: '3.5 months',
    teamSize: '2 people',
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization Platform',
    shortDescription: 'Interactive platform for visualizing complex datasets',
    fullDescription: 'A comprehensive data visualization platform for creating and sharing interactive charts, dashboards, and reports.',
    longDescription: `This powerful visualization platform enables users to create stunning, interactive visualizations from complex datasets. Built with modern web technologies, it provides drag-and-drop dashboard creation, real-time data updates, and collaborative features.

The platform supports various chart types, custom styling, data filtering, and seamless integration with data sources. Advanced features include geospatial visualization, time-series analysis, and predictive analytics.`,
    tech: ['Python', 'Plotly', 'Dash', 'Pandas', 'React', 'D3.js', 'WebSocket'],
    gradient: 'from-pink-500 to-purple-600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    demoUrl: '#',
    sourceUrl: '#',
    images: [
      'https://images.unsplash.com/photo-1460925895917-adf4e566c539?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=1200&h=600&fit=crop',
    ],
    challenges: [
      'Rendering performance with large datasets',
      'Real-time data synchronization',
      'Intuitive UI for non-technical users',
      'Data security and access control',
    ],
    solutions: [
      'Implemented WebGL rendering and virtual scrolling',
      'Used WebSocket for live updates',
      'Created visual builder with drag-and-drop',
      'Role-based access control (RBAC)',
    ],
    results: [
      'Handles 1M+ data points smoothly',
      '<100ms update latency',
      'Used by 500+ users',
      '4.8/5 user satisfaction rating',
    ],
    features: [
      '30+ chart types',
      'Drag-and-drop dashboard builder',
      'Real-time data updates',
      'Custom styling and theming',
      'Data export (PDF, PNG, CSV)',
      'Collaborative dashboards',
    ],
    timeline: '7 months',
    teamSize: '5 people',
  },
];
