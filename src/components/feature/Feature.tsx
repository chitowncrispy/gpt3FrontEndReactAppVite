import './feature.css'

interface FeatureParams {
  title: string;
  text: string;
}

const Feature = (featureParams: FeatureParams) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div />
        <h1>{featureParams.title}</h1>
      </div>
      <div className='gpt3__features-container_feature-text'>
        <p>{featureParams.text}</p>
      </div>
    </div>
  )
}

export default Feature