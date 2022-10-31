import Masonry from 'react-masonry-css'
import Container from '@/components/generic/Container'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'

const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    425: 1,
}

export default function MasonryImageGrid(props) {
    return (
        <Container>
            {props.title && (
                <div className={'py-12 text-center md:text-left'}>
                    <h1 className={'font-satoshi-medium text-6xl'}>
                        {props.title}
                    </h1>
                </div>
            )}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {props?.images?.map((image) => (
                    <div key={image.id} className={'relative last:mb-0'}>
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    id="interactable"
                                    data-type="image"
                                />
                                {image.title && (
                                    <div
                                        className={
                                            'absolute inset-0 flex items-center justify-center font-satoshi-bold text-3xl'
                                        }
                                    >
                                        <h1 className={' bg-black py-3 px-4 '}>
                                            {image.title}
                                        </h1>
                                    </div>
                                )}
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay
                                    id="dialog-overlay"
                                    className={
                                        'fixed inset-0 z-[130] bg-black bg-opacity-80'
                                    }
                                />
                                <Dialog.Content
                                    id="dialog-content"
                                    className={
                                        'fixed top-1/2 left-1/2 z-[130] w-full -translate-x-1/2 -translate-y-1/2'
                                    }
                                >
                                    <Container className={'bg-white'}>
                                        {image.title && (
                                            <Dialog.Title>
                                                {image.title}
                                            </Dialog.Title>
                                        )}
                                        <div
                                            className={
                                                'relative flex h-fit w-full items-center justify-center'
                                            }
                                        >
                                            <img
                                                className={'max-h-[90vh]'}
                                                src={image.url}
                                                alt={image.alt}
                                            />
                                            <Dialog.Close
                                                className={
                                                    'absolute -top-8 right-0'
                                                }
                                            >
                                                <Cross1Icon
                                                    className={
                                                        'h-8 w-8 text-white dark:text-white'
                                                    }
                                                />
                                            </Dialog.Close>
                                        </div>
                                    </Container>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </div>
                ))}
            </Masonry>
        </Container>
    )
}
