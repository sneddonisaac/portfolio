import TripleMobileMockup from '@/components/blocks/Content/TripleMobileMockup'
import DecreasingImageGrid from '@/components/blocks/Grids/DecreasingImageGrid'
import Simple5050 from '@/components/blocks/Headers/Simple5050'
import NoisyGradient5050Full from '@/components/blocks/Headers/NoisyGradient5050Full'
import NoisyGradient5050Bordered from '@/components/blocks/Headers/NoisyGradient5050Bordered'
import BlockNotShowing from '@/components/generic/BlockNotShowing'
import SimpleHeader from '@/components/blocks/Headers/SimpleHeader'
import MasonryImageGrid from '@/components/blocks/Grids/MasonryImageGrid'
import FullPageScreenshot from '../../components/blocks/Content/FullPageScreenshot'

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
