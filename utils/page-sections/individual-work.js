import TripleMobileMockup from '../../components/organisms/Content/TripleMobileMockup'
import DecreasingImageGrid from '../../components/organisms/Grids/DecreasingImageGrid'
import Simple5050 from '../../components/organisms/Headers/Simple5050'
import NoisyGradient5050Full from '../../components/organisms/Headers/NoisyGradient5050Full'
import NoisyGradient5050Bordered from '../../components/organisms/Headers/NoisyGradient5050Bordered'
import BlockNotShowing from '../BlockNotShowing'

export default function Blocks(data) {
    switch (data.__typename) {
        case 'DecreasingImageGrid':
            return <DecreasingImageGrid {...data} />
        case 'Simple5050Header':
            return <Simple5050 {...data} />
        case 'TripleMobileMockup':
            return <TripleMobileMockup {...data} />
        case 'NoisyGradient5050Full':
            return <NoisyGradient5050Full {...data} />
        case 'NoisyGradient5050Bordered':
            return <NoisyGradient5050Bordered {...data} />
        default:
            return <BlockNotShowing {...data} />
    }
}
