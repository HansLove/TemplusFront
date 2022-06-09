import React from 'react'
import './estilo.css'

function Clock() {
    return (
        <div class="content">
  <div class="widget clock" id="okinawa" data-timezone="+9">
    <div class="shadow"></div>
    <div class="hand seconds"></div>
    <div class="hand minutes"></div>
    <div class="hand hours"></div>
    <div class="hand-cap"></div>
    <label>Hashity</label>
  </div>
  <div class="widget clock" id="seattle" data-timezone="-8">
    <div class="shadow"></div>
    <div class="hand seconds"></div>
    <div class="hand minutes"></div>
    <div class="hand hours"></div>
    <div class="hand-cap"></div>
    <label>Genesis Block</label>
  </div>
  <div class="widget clock" id="amalfi" data-timezone="+1">
    <div class="shadow"></div>
    <div class="hand seconds"></div>
    <div class="hand minutes"></div>
    <div class="hand hours"></div>
    <div class="hand-cap"></div>
    <label>Bitcoin city</label>
  </div>
</div>
    )
}

export default Clock
