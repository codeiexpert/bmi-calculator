<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       http://103.9.170.95/~novonordisk/
 * @since      1.0.0
 *
 * @package    Custom_Bmi_Calculator
 * @subpackage Custom_Bmi_Calculator/public/partials
 */
?>
 <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

<!-- This file should primarily consist of HTML with a little bit of PHP. -->
<div class="calculator-section">
	<div class="bmi-calculator bmi-wrapper bg-white" data-progress = '{"Underweight":[10,18.49],"Normal weight":[18.5,22.99],"Pre-obesity":[23,27.4],"Obesity":[27.5,27.5]}'>
		<div class="bmi-pillbox text-center">
          <div class="bmi-pillbox-group">
            <button type="button" class="bmi-pillbox-item pillbox-metric active" data-group="metric">
              Metrics
            </button>
            <button type="button" class="bmi-pillbox-item pillbox-imperial" data-group="imperial">
              Imperial
            </button>
          </div>
        </div>

        <div class="bmi-metric">
    		<div class="d-flex bmi-height-slider-con">
		       	<div class="bmi-height-slider">
		        	<div class="height-label">
		        	    <label for="bmiHeightSlider">Height</label>
		        	</div>
					<input type="range" min="0" max="250.0" value="0" class="height-slider" id="bmiHeightSlider" >			 
		        </div>
		        <div class="bmi-height-value">
		        	<div class="d-flex m-auto">
					  <input type="number" inputmode="decimal" min="0" max="250.0" placeholder="_ _" size="2" lass="height-value" id="bmiHeightVal" onKeyPress="if(this.value.length==6) return false;">		
					  <span class="height-span" >cm</span>	
					</div> 
		        </div>
		    </div>
		    <div class="d-flex bmi-height-slider-con">
		        <div class="bmi-weight-slider">
		        	<div class="weight-label">
		        	  <label for="bmiWeightSlider">Weight</label>
		        	</div>
					  <input type="range" min="0" max="450.0" value="0" class="weight-slider" id="bmiWeightSlider" >			 
		        </div>
		        <div class="bmi-weight-value">
		        	<div class="d-flex m-auto">
					  <input type="number" inputmode="decimal" min="0" max="450.0" value="" placeholder="_ _" size="2" class="weight-value" id="bmiWeightVal" onKeyPress="if(this.value.length==6) return false;">		
					  <span class="weight-span" onKeyPress="if(this.value.length==6) return false;">kg</span>	
					</div> 
		        </div>
		    </div>
        </div>

        <div class="bmi-imperial" style="display: none;">
	       	<div class="bmi-height-slider">
	        	<div class="height-label">
	        	    <label for="bmiHeightSlider">Height</label>
	        	</div>
	        	<div class="ft-in-slider"  id="bmiFtInSlider"></div>
<!-- 				<input type="range" min="0" max="8.2" size="2" value="0" class="ft-in-slider" step="0.1" id="bmiFtInSlider" >	 -->		 
	        </div>
	        <div class="bmi-height-value">
	        	<div class="d-flex m-auto">
				  <input type="number" inputmode="decimal" min="0" max="8"  size="2" placeholder="_ _" class="height-ft-value" id="bmiFtVal" onKeyPress="if(this.value.length==6) return false;">		
				  <span class="ft-span" >ft</span>	
				  <input type="number" inputmode="decimal" min="0" max="12"  size="2" placeholder="_ _" class="height-in-value" id="bmiInVal" onKeyPress="if(this.value.length==6) return false;">		
				  <span class="in-span" >in</span>	
				</div> 
	        </div>
	        <div class="bmi-weight-slider">
	        	<div class="weight-label">
	        	  <label for="bmiWeightSlider">Weight</label>
	        	</div>
	        	<div class="st-lb-slider"  id="bmiStLbSlider"></div>
				  <!-- <input type="range" min="0" max="70.14" value="0" class="st-lb-slider" step="0.1" id="bmiStLbSlider" >	 -->		 
	        </div>
	        <div class="bmi-weight-value">
	        	<div class="d-flex m-auto">
				  <input type="number" inputmode="decimal" min="0" max="70" placeholder="_ _" class="weight-st-value" id="bmiStVal" onKeyPress="if(this.value.length==6) return false;">		
				  <span class="st-span" >st</span>	
				  <input type="number" inputmode="decimal" size="2" min="0" max="14" placeholder="_ _" class="weight-lb-value" id="bmiLbVal" onKeyPress="if(this.value.length==6) return false;">		
				  <span class="lb-span" >lb</span>	
				</div> 
	        </div>
        </div>
   
        <div class="bmi-result-heading">
        	<div class="d-flex">
			    <h4 class="bmi-result-title">
			      Your BMI:
			    </h4>
			    <p class="bmi-result-value">__</p>
			</div>
        </div>

         <div class="bmi-result-c-heading">
        	<div class="d-flex">
			    <h4 class="bmi-result-c-title">
			      Your Weight Classification:
			    </h4>
			    <p class="bmi-result-c-value">__</p>
			</div>
        </div>
        <div class="bmi-result-comment">
        	<div class="d-flex">
			    <p class="bmi-result-comment"></p>
			</div>
        </div>

	  <div class="bmi-progress-bar text-center">
		      <div class="pointer"></div>
			    <div class="vl group-0"></div>    
			    <div class="vl group-1"></div>
			    <div class="vl group-2"></div>
			    <div class="vl group-3"></div>
			    <!-- <div class="vl group-4"></div> -->
		</div>
	</div>
</div>


  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>	