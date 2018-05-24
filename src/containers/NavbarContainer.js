import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortBy, changeView } from '../actions/card-actions'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
`
const ControlBox = styled.div`
  display: inline-block;
  float: right;
  line-height: 5;
  margin: 0px 15px;
`
const TopBar = styled.div`
  display: block;
  width: 100%;
  height: 50px;
`
const ViewButton = styled.button`
  border-radius: 4px;
  padding: 4px 6px;
  margin-left: 10px;
`

const SORT_OPTIONS = [
  {label: 'Last word alphabetical order', value: 'asc'},
  {label: 'Last word reverse alphabetical order', value: 'desc'}
]

class NavbarContainer extends Component {
  constructor (props) {
    super(props)

    this.bound = {
      handleChangeView: this.handleChangeView.bind(this),
      handleChangeSort: this.handleChangeSort.bind(this)
    }
  }

  handleChangeSort () {
    const { sortType, changeSort } = this.props
    const changed = (sortType === 'asc') ? 'desc' : 'asc'
    console.log('sort change')
    changeSort(changed)
  }

  handleChangeView () {
    const { changeView, viewType } = this.props
    const changed = (viewType === 'multi') ? 'single' : 'multi'
    console.log('view change', viewType, changed)
    changeView(changed)
  }

  render () {
    const { sortType, viewType } = this.props
    let viewMenu = ( <i className="fa fa-th"></i> )

    if (viewType === 'single') {
      viewMenu = ( <i className="fa fa-square"></i> )
    }

    return (
      <TopBar>
        <Title> MeowPix </Title>
        <ControlBox>
          Sort By:
          <select defaultValue={sortType} onChange={this.bound.handleChangeSort}>
            {
              SORT_OPTIONS.map((opt, index) => {
                return (
                  <option key={index} value={opt.value}>
                    {opt.label}
                  </option>
                )
              })
            }
          </select>
        </ControlBox>
        <ControlBox>
          View:
          <ViewButton onClick={this.bound.handleChangeView}>
            { viewMenu }
          </ViewButton>
        </ControlBox>
      </TopBar>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('s', state)
  return {
    sortType: state.cards.sortType,
    viewType: state.cards.viewType
  }
}

function mapDispatchToProps () {
  return (dispatch) => ({
    changeSort: (sortType) => dispatch(sortBy(sortType)),
    changeView: (viewType) => dispatch(changeView(viewType))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
