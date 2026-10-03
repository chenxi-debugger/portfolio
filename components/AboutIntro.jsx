export default function AboutIntro() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">
        About
        <div className="h-1 w-8 bg-cyan-400 mt-2 rounded"></div>
        </h1>
        <p className="text-lg text-gray-300 mb-10">
        I'm a full-stack engineer in Santa Clara, California, building web applications with integrated machine learning. I started with React and Node.js, and now work across the full ML lifecycle: data cleaning, feature engineering, model comparison, and serving predictions through APIs.

        </p>
        <p className="text-lg text-gray-300">
        My recent projects take ML models from notebook to product: a NYC real estate price predictor with a 4-model comparison pipeline (LightGBM champion, R² 0.65) and a short-video like-prediction system with FastAPI serving and MLflow tracking. I'm looking for an AI full-stack / application engineer role where I can build products that put models in front of real users.
        </p>
      </div>
    )
  }
  