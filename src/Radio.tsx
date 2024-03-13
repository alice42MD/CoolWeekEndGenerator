import { useEffect, useRef, useState } from "react"
import { RadioBrowserApi, StationSearchType, Station } from 'radio-browser-api'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';
import { StyledRadioContainer } from "./styles";

function Radio () {
  const [stations, setStations] = useState<Station[]>([])
  const [stationName, setStationName] = useState<string>('Radio Nova')

  const audioRef: any = useRef()
  const api = new RadioBrowserApi('My Radio App')

  const getChannels = async (stationName: string) => {
    const response = await api.getStationsBy(StationSearchType.byNameExact, stationName)
    const frRadios = response.filter(a => a.countryCode === 'FR')
    setStations(frRadios)
  }

  useEffect(() => {
    getChannels(stationName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stationName])

  const items: MenuProps['items'] = [{
    label: <div>Radio Meuh</div>,
    key: '0',
    onClick: () => setStationName('Radio Meuh')
  },
  {
    label: <div>FIP</div>,
    key: '1',
    onClick: () => setStationName('FIP')
  },
  {
    label: <div>Radio Nova</div>,
    key: '2',
    onClick: () => setStationName('Radio Nova')
  },
  {
    type: 'divider',
  },
  {
    label: 'new radio',
    key: '3',
    // onClick: () => addStation()
  }]

  return (
    stations[0] &&
    <StyledRadioContainer>
      <div >
        <div><img src={stations[0].favicon} alt={stations[0].name} /></div>
        <Dropdown
          children={<DownOutlined />}
          menu={{ items, selectable: true }}
          trigger={['click']}
        />
      </div>
      <audio
        ref={audioRef}
        src={stations[0].url}
        controls
        autoPlay={true}
      />
    </StyledRadioContainer>
  )
}

export default Radio