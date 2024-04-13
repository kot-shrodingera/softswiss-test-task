import Offer, { type OfferType } from './Offer'

const data: OfferType[] = [
  {
    title: 'Move the borders of reality!',
    text: 'Go on a space adventure',
    isWide: true,
  },
  {
    title: 'Space is not just stars and planets',
    text: 'it is a majestic journey to ',
  },
  {
    title: 'For those who dream of stars',
    text: 'Our offer: make your dream come true',
  },
  {
    title: 'Fulfill your fantastic dreams',
    text: 'Space has never been so close',
    isWide: true,
  },
]

function Offers() {
  return (
    <div className="offers">
      <div className="offers--heading">Offers</div>
      <div className="offers--list">
        {data.map(({ title, text, isWide }) => (
          <Offer key={title} title={title} text={text} isWide={isWide} />
        ))}
      </div>
    </div>
  )
}
export default Offers
