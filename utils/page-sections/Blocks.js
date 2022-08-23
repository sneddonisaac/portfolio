import TripleMobileMockup from '@/components/organisms/Content/TripleMobileMockup'
import DecreasingImageGrid from '@/components/organisms/Grids/DecreasingImageGrid'
import Simple5050 from '@/components/organisms/Headers/Simple5050'
import NoisyGradient5050Full from '@/components/organisms/Headers/NoisyGradient5050Full'
import NoisyGradient5050Bordered from '@/components/organisms/Headers/NoisyGradient5050Bordered'
import BlockNotShowing from '@/components/molecules/BlockNotShowing'
import SimpleHeader from '@/components/organisms/Headers/SimpleHeader'
import MasonryImageGrid from '@/components/organisms/Grids/MasonryImageGrid'
import FullPageScreenshot from '../../components/organisms/Content/FullPageScreenshot'

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
        case 'SimpleHeader':
            return <SimpleHeader {...data} />
        case 'MasonryImageGrid':
            return <MasonryImageGrid {...data} />
        case 'FullPageScreenshot':
            return <FullPageScreenshot {...data} />
        default:
            return <BlockNotShowing {...data} />
    }
}
