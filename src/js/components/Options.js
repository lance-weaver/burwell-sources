import React, { Component, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'
import NavigationCheck from 'material-ui/svg-icons/navigation/check'

const Options = ({ optionsOpen, openOptions, closeOptions, optionsAnchorElement, selectedScale, selectScale, changeView, view }) => (
  <div>
    <FlatButton
      id='option-button'
      onClick={() =>{ openOptions(document.getElementById('option-button')) }}
      label='Options'
    />
    <Popover
      open={optionsOpen}
      anchorEl={optionsAnchorElement}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      onRequestClose={() => { closeOptions() }}
      animation={PopoverAnimationVertical}
    >
      <Menu>
        <MenuItem
          primaryText='View'
          leftIcon={<ChevronLeft/>}
          menuItems={[
            <MenuItem primaryText='List' value='list' onClick={() => { changeView('list') }} rightIcon={view === 'list' ? <NavigationCheck/> : null} />,
            <MenuItem primaryText='Map' value='map' onClick={() => { changeView('map') }} rightIcon={view === 'map' ? <NavigationCheck/> : null}/>
          ]}
        />
        <MenuItem
          primaryText='Scale'
          leftIcon={<ChevronLeft/>}
          value={selectedScale}
          menuItems={[
            <MenuItem onClick={() => { selectScale('all') }} primaryText='All' value='all' rightIcon={selectedScale === 'all' ? <NavigationCheck/> : null} />,
            <MenuItem onClick={() => { selectScale('large') }} primaryText='Large' value='large' rightIcon={selectedScale === 'large' ? <NavigationCheck/> : null} />,
            <MenuItem onClick={() => { selectScale('medium') }} primaryText='Medium' value='medium' rightIcon={selectedScale === 'medium' ? <NavigationCheck/> : null}/>,
            <MenuItem onClick={() => { selectScale('small') }} primaryText='Small' value='small' rightIcon={selectedScale === 'small' ? <NavigationCheck/> : null}/>,
            <MenuItem onClick={() => { selectScale('tiny') }} primaryText='Tiny' value='tiny' rightIcon={selectedScale === 'tiny' ? <NavigationCheck/> : null}/>
          ]}
        />
      </Menu>
    </Popover>
  </div>
)

Options.propTypes = {
  optionsOpen: PropTypes.bool.isRequired,
  openOptions: PropTypes.func.isRequired,
  closeOptions: PropTypes.func.isRequired,
  optionsAnchorElement: PropTypes.object.isRequired,
  selectedScale: PropTypes.string.isRequired,
  selectScale: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired
}

export default Options
