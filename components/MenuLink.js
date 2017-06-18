import { Component } from 'react'
import styled from 'styled-components'
import Router from 'next/router'

const Link = styled.a`
  cursor: pointer;
  color: ${props => (props.isActive ? 'white' : '#0f0f0f')};
  background-color: ${props => (props.isActive ? '#0f0f0f' : 'transparent')};
  display: inline-block;
  margin-left: 0 12px;
  padding: 3px 8px 4px 8px;
  text-transform: uppercase;
  border-radius: 4px;
  text-decoration: none;
  touch-action: manipulation;
`

export default class MenuLink extends Component {
  static defaultProps = {
    suffix: '#',
  }

  handleClick = e => {
    e.preventDefault()
    const href = `${this.props.href}`
    Router.push(href, href, { scroll: false, shallow: true })
  }

  dispatchPrefetch = () => {
    Router.prefetch(this.props.href)
  }

  render() {
    const { href } = this.props
    return (
      <Link
        href={`${href}`}
        isActive={href === this.props.url.pathname}
        onTouchStart={this.dispatchPrefetch}
        onMouseEnter={this.dispatchPrefetch}
        onClick={this.handleClick}
      >
        {this.props.children}
      </Link>
    )
  }
}
