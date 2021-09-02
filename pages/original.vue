<template>
  <div>
    <InspiringQuote/>
    <WhoWeAre/>

    <LargeBackgroundImage image-url="/Hiking.jpg" :height="758"/>

    <TwoColumnTextPanel 
      heading="ACTIVITIES" 
      body="Outdoor adventures and outings are core to the Troop 284 experience, including several campouts per year, summer camps like Camp Wolfeboro, Shotgun Trap Shooting, the Berkeley Ropes Course, and an annual adventure at a premiere destination like Catalina Island, or Whitewater Rafting on the Klamath or American River."
    >
      <hr>
      <b-btn>Click Me</b-btn>
    </TwoColumnTextPanel>

    <LargeBackgroundImage image-url="/EmigrantWilderness.jpg" :height="696"/>

    <TwoColumnTextPanel 
      heading="MEMBERSHIP" 
      body="The Troop 284 Scouting program is offered to youth that have completed the fifth grade and/or transitioned from Cub Scouts. Youth must be between 11 and 17 years of age, according to the policies and guidelines of the Boy Scouts of America."
    />
    <LargeBackgroundImage image-url="/VFW-lit-up.jpg" :height="1124"/>

    <TwoColumnTextPanel 
      heading="MEETINGS" 
      body="Scouts meet for Troop and Patrol meetings on two or three Mondays a month at 7:30 p.m. in the Veterans Memorial Building on Mount Diablo Boulevard in Lafayette.  Weather permitting, meetings are held on the outdoor patio. During poor weather, meetings are held in the very spacious main hall."
    />

    <LargeBackgroundImage image-url="/Scouts.jpg" :height="737"/>

    <TwoColumnTextPanel 
      heading="ABOUT US" 
      body="We are a small, tight-knit group where Scouts from various backgrounds learn and have an exceptional amount of fun while becoming leaders in the community."
    />


    <SponsoredBy/>
  
  </div>
</template>

<script>
export default {}
</script>
