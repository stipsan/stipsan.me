import dynamic from 'next/dynamic'

import faker from 'faker'

const Markdown = dynamic(import('react-markdown'))

export default () => <Markdown source={faker.lorem.paragraphs(16)} />
