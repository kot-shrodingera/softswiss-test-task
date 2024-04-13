import clsx from 'clsx'

export type OfferType = {
  isWide?: boolean
  title: string
  text: string
}

function Offer({ isWide = false, title, text }: OfferType) {
  return (
    <div className={clsx('offer', isWide && 'offer--wide')}>
      <div className="offer--title">{title}</div>
      <div className="offer--text">{text}</div>
      <button className="button button--outline">Learn more</button>
    </div>
  )
}
export default Offer
