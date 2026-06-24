import PropTypes from 'prop-types'

// Child component: AnimalCard
const AnimalCard = ({
  additional,
  diet,
  name,
  scientificName,
  showAdditional,
  size
}) => {
  return (
    <div className="animal-card">
      <div className="animal-header">
        <h3 className="animal-name">{name}</h3>
        <p className="animal-scientific"><em>{scientificName}</em></p>
      </div>

      <div className="animal-stats">
        <div className="stat-item">
          <span className="stat-label">Size:</span>
          <span className="stat-value">{size} kg</span>
        </div>
        <div className="stat-item" style={{ marginTop: '8px' }}>
          <span className="stat-label">Diet:</span>
          <span className="stat-value">{diet.join(', ')}</span>
        </div>
      </div>

      <div className="animal-action">
        <button 
          className="more-info-btn"
          onClick={() => showAdditional(additional)}
        >
          More Info
        </button>
      </div>
    </div>
  )
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
}

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
}

// Parent component dataset
const initialAnimals = [
  {
    name: 'Lion',
    scientificName: 'Panthero leo',
    size: 140,
    diet: ['meat'],
  },
  {
    name: 'Gorilla',
    scientificName: 'Gorilla beringei',
    size: 205,
    diet: ['plants', 'insects'],
    additional: {
      notes: 'This is the eastern gorilla.'
    }
  },
  {
    name: 'Zebra',
    scientificName: 'Equus quagga',
    size: 322,
    diet: ['plants'],
    additional: {
      notes: 'There are three different species of zebra.',
      link: 'https://en.wikipedia.org/wiki/Zebra'
    }
  }
]

const EX19 = () => {
  const showAdditionalData = (additional) => {
    const alertMessage = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')
    alert(alertMessage)
  }

  return (
    <div className="demo-card" style={{ maxWidth: '850px' }}>
      <h2>Exercise 19: PropTypes Validation</h2>
      <div className="animal-cards-grid">
        {initialAnimals.map((animal) => (
          <AnimalCard 
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditionalData}
          />
        ))}
      </div>
    </div>
  )
}

export default EX19
