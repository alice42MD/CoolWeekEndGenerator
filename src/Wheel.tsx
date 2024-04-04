import React from "react"
import { Wheel } from "react-custom-roulette"

interface ImageProps {
  uri: string
  offsetX?: number // Optional
  offsetY?: number // Optional
  sizeMultiplier?: number // Optional
  landscape?: boolean // Optional
}

interface PointerProps {
  src?: string // Optional
  style?: React.CSSProperties // Optional
}

export default function WheelComponent({ data }: { data: any }) {
  const [mustSpin, setMustSpin] = React.useState<boolean>(false)
  const [prizeNumber, setPrizeNumber] = React.useState<number>(0)

  const [wheeleData, setWheelData] = React.useState(data)
  console.log("mustSpin", mustSpin)

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  React.useEffect(() => {
    const addShortString = data.map((item: { text: string }) => {
      return {
        completeOption: item.text,
        option: item.text.length >= 30 ? item.text.substring(0, 30).trimEnd() + "..." : item.text
      }
    })
    setWheelData(addShortString)
  }, [data])

  return (
    <>
      <div>
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={0.2}
          prizeNumber={prizeNumber}
          data={wheeleData}
          outerBorderColor={"#ccc"}
          outerBorderWidth={9}
          innerBorderColor={"#f2f2f2"}
          radiusLineColor={"tranparent"}
          radiusLineWidth={1}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={10}
          backgroundColors={[
            "#3f297e",
            "#175fa9",
            "#169ed8",
            "#239b63",
            "#64b031",
            "#efe61f",
            "#f7a416",
            "#e6471d",
            "#dc0936",
            "#e5177b",
            "#be1180",
            "#871f7f"
          ]}
          onStopSpinning={() => {
            setMustSpin(false)
          }}
        />
        <button className="button roulette-button" onClick={handleSpinClick}>
          Spin
        </button>
      </div>
    </>
  )
}
