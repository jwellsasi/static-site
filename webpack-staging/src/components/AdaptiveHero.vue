<template>
  <div class="AdaptiveHero">
      <a href="http://localhost:8080/#/" target="_self">Home</a>
    <h2 class="asi-h2 display-2 text-center" style="padding-top:10px;font-size:2.5em !important;color:#54585a !important;">
         {{ msg }}
    </h2>
    <div id="asi-fluid-html-hero">
        <div class="section asi-section asi-mix-hero-wrapper">                        
            <div id="asi-mix-hero" class="asi-bg-hero-image container-fluid asi-container-fluid asi-fluid-hero" 
                style="background-image:url(https://asf.scene7.com/is/image/ASF/asi-furniture-tile-bg.jpg);">                           
                <div class="row asi-row">                               
                    <div id="asi-content-col" class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">                                  
                        <div class="asi-content asi-content-body" style="padding: 12% 15px;">                                       
                            <div id="asi-hero-wrapper" class="asi-section-content-wrapper" style="background-color: rgb(238, 61, 66); padding: 25px;">
                                <p class="asi-urgency-msg text-center" style="color: rgb(255, 255, 255);">{{ urgencyText }}</p>
                                <div class="asi-divider">
                                    <div class="asi-divider-line"></div>
                                </div>
                                <h1 class="asiH1 asi-h1 display-1 asi-display-1">
                                {{headlineText}}
                                </h1>
                                <p class="asi-hero-message asi-lead lead asi-hero-lead text-center" style="color: rgb(255, 255, 255);">
                                    {{ messageText }}
                                </p>                                           
                                <p class="asi-hero-sub-message asi-sub-lead text-center" style="color: rgb(255, 255, 255);">
                                    {{ messageSubText }}
                                </p>
                                <div id="asi-hero-btn-wrap">
                                    <a id="asiHero-button-link" target="_self" v-bind:href="buttonLink" data-pos="0">
                                        <button id="asiHero-button" v-bind:class="[buttonClass]">
                                            {{ buttonText }}
                                        </button>
                                    </a>
                                </div>                                      
                           </div>                                  
                      </div>                              
                 </div>                          
            </div>
        </div>
     </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'AdaptiveHero',
  data () {
    return {
      msg: 'Fluid Width HTML Hero w/ BG Image',
      urgencyText: 'ENDS TODAY!',
      headlineText: '20% OFF\nOVERSTOCK',
      messageText: 'SCORE SOFAS, CHAIRS, BEDS, & MORE',
      messageSubText: 'while quantities last - selection may vary by store',
      bgImage: 'https://asf.scene7.com/is/image/ASF/asi-furniture-tile-bg.jpg',
      addButton: 'true',
      buttonText: 'SHOP NOW',
      buttonClass: 'asi-mix-button white',
      buttonLink: '/search/on-sale'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
