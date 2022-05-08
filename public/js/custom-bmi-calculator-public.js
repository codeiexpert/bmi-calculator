(function(jQuery) {
    'use strict';

    /**
     * All of the code for your public-facing JavaScript source
     * should reside in this file.
     *
     * Note: It has been assumed you will write jQuery code here, so the
     * jQuery function reference has been prepared for usage within the scope
     * of this function.
     *
     * This enables you to define handlers, for when the DOM is ready:
     *
     * jQuery(function() {
     *
     * });
     *
     * When the window is loaded:
     *
     * jQuery( window ).load(function() {
     *
     * });
     *
     * ...and/or other possibilities.
     *
     * Ideally, it is not considered best practise to attach more than a
     * single DOM-ready or window-load handler for a particular page.
     * Although scripts in the WordPress core, Plugins and Themes may be
     * practising this, we should strive to set a better example in our own work.
     */
    // var rangeslider = document.getElementById("bmiHeightSlider");
    // var output = document.getElementById("bmiHeightVal");


    jQuery(document).on('click', '.find_out_more', function(e) {
        //debugger;
        e.preventDefault();
        var curr_path = window.location.pathname;
        var href_url = jQuery(this).attr('data-href');
        location.href = href_url;

    });


    //change metric - imeperial


    jQuery(document).on('click', '.bmi-pillbox-item', function() {
        jQuery('.bmi-pillbox-item').removeClass('active');
        jQuery(this).addClass('active');
        var group = jQuery(this).data('group');
        // console.log(group);
        if (group == 'metric') {
            jQuery('.bmi-imperial').hide();
            jQuery('.bmi-metric').show();
        } else {
            jQuery('.bmi-metric').hide();
            jQuery('.bmi-imperial').show();
        }
    });


    //metric bmi calculator

    jQuery(document).on('input', '#bmiHeightSlider', function() {
        var weight = jQuery('#bmiWeightVal').val();
        var height = jQuery(this).val();
        jQuery('#bmiHeightVal').val(height);

        if (height != '') {
            toFeetInch(height);
            var n_height = height;
        } else {
            jQuery('#bmiHeightVal').val('');
            var n_height = '0.00';
        }

        if (weight != '') {
            var n_weight = weight;
        } else {
            var n_weight = '0.00';
        }

        var metricBmi = calcMetricBmi(n_height, n_weight);
        var classification = weightClassification(metricBmi);

        jQuery('.bmi-result-c-value').html(classification);
        jQuery('.bmi-result-value').html(metricBmi);
    });

    jQuery(document).on('input', '#bmiHeightVal', function() {
        var weight = jQuery('#bmiWeightVal').val();
        var height = jQuery(this).val();

        jQuery('#bmiHeightSlider').val(height);

        if (height != '') {
            toFeetInch(height);
            var n_height = height;
        } else {
            jQuery('#bmiHeightVal').val('');
            jQuery('#bmiHeightSlider').val('0');
            var n_height = '0.00';
        }

        if (weight != '') {
            var n_weight = weight;
        } else {
            var n_weight = '0.00';
        }

        var metricBmi = calcMetricBmi(n_height, n_weight);
        var classification = weightClassification(metricBmi);


        jQuery('.bmi-result-value').html(metricBmi);
        jQuery('.bmi-result-c-value').html(classification);

    });

    jQuery(document).on('input', '#bmiWeightSlider', function() {
        var height = jQuery('#bmiHeightVal').val();
        var weight = jQuery(this).val();

        jQuery('#bmiWeightVal').val(weight);

        if (weight != '') {
            toStoneLb(weight);
            var n_weight = weight;
        } else {
            var n_weight = '0.00';
            jQuery('#bmiWeightVal').val('');
        }

        if (height != '') {
            var n_height = height;
        } else {
            var n_height = '0.00';
        }


        var metricBmi = calcMetricBmi(n_height, n_weight);
        var classification = weightClassification(metricBmi);

        jQuery('.bmi-result-c-value').html(classification);
        jQuery('.bmi-result-value').html(metricBmi);
    });

    jQuery(document).on('input', '#bmiWeightVal', function() {
        var height = jQuery('#bmiHeightVal').val();
        var weight = jQuery(this).val();

        jQuery('#bmiWeightSlider').val(weight);
        if (height != '') {
            var n_height = height;
        } else {
            var n_height = '0.00';
        }

        if (weight != '') {
            toStoneLb(weight);
            var n_weight = weight;
        } else {
            jQuery('#bmiWeightSlider').val('0.00');
            var n_weight = '0.00';
        }

        var metricBmi = calcMetricBmi(n_height, n_weight);
        var classification = weightClassification(metricBmi);

        jQuery('.bmi-result-value').html(metricBmi);
        jQuery('.bmi-result-c-value').html(classification);
    });

    //imperial  bmi calculator


    jQuery(document).on('input', '#bmiFtVal', function() {
        if (jQuery(this).val() != '') {
            var ft = jQuery(this).val();
        } else {
            var ft = 0;
        }

        if (jQuery('#bmiInVal').val() != '') {
            var inch = jQuery('#bmiInVal').val();
        } else {
            var inch = 0;
        }

        if (jQuery('#bmiLbVal').val() != '') {
            var lb = jQuery('#bmiLbVal').val();
        } else {
            var lb = 0;
        }

        if (jQuery('#bmiStVal').val() != '') {
            var st = jQuery('#bmiStVal').val();
        } else {
            var st = 0;
        }

        var imperial_bmi = calcImperialBmi(ft, inch, st, lb);
        var classification = weightClassification(imperial_bmi);
        jQuery('.bmi-result-value').html(imperial_bmi);
        jQuery('.bmi-result-c-value').html(classification);
        toCm(ft, inch)
        if (ft == '') {
            jQuery("#bmiFtInSlider").slider('values', [0, (parseInt('0.00') * 12) + parseInt(inch)]);
        }
        if (inch == '') {
            jQuery("#bmiFtInSlider").slider('values', [0, (parseInt(ft) * 12) + parseInt('0.00')]);
        }
        if (ft != '' && inch != '') {
            jQuery("#bmiFtInSlider").slider('values', [0, (parseInt(ft) * 12) + parseInt(inch)]);
        }


        // console.log(imperial_bmi);

    });


    jQuery(document).on('input', '#bmiInVal', function() {
        if (jQuery(this).val() != '') {
            var inch = jQuery(this).val();
        } else {
            var inch = 0;
        }
        if (jQuery('#bmiFtVal').val() != '') {
            var ft = jQuery('#bmiFtVal').val();
        } else {
            var ft = 0;
        }

        if (jQuery('#bmiLbVal').val() != '') {
            var lb = jQuery('#bmiLbVal').val();
        } else {
            var lb = 0;
        }

        if (jQuery('#bmiStVal').val() != '') {
            var st = jQuery('#bmiStVal').val();
        } else {
            var st = 0;
        }

        var imperial_bmi = calcImperialBmi(ft, inch, st, lb);
        var classification = weightClassification(imperial_bmi);
        jQuery('.bmi-result-value').html(imperial_bmi);
        jQuery('.bmi-result-c-value').html(classification);
        toCm(ft, inch)
        if (ft == '') {
            jQuery("#bmiFtInSlider").slider('values', [0, (parseInt('0.00') * 12) + parseInt(inch)]);
        }
        if (inch == '') {
            jQuery("#bmiFtInSlider").slider('values', [0, (parseInt(ft) * 12) + parseInt('0.00')]);
        }
        if (ft != '' && inch != '') {
            jQuery("#bmiFtInSlider").slider('values', [0, (parseInt(ft) * 12) + parseInt(inch)]);
        }
        // console.log(imperial_bmi);
    });


    jQuery(document).on('input', '#bmiStVal', function() {
        if (jQuery(this).val() != '') {
            var st = jQuery(this).val();
        } else {
            var st = 0;
        }

        if (jQuery('#bmiInVal').val() != '') {
            var inch = jQuery('#bmiInVal').val();
        } else {
            var inch = 0;
        }

        if (jQuery('#bmiLbVal').val() != '') {
            var lb = jQuery('#bmiLbVal').val();
        } else {
            var lb = 0;
        }

        if (jQuery('#bmiFtVal').val() != '') {
            var ft = jQuery('#bmiFtVal').val();
        } else {
            var ft = 0;
        }

        var imperial_bmi = calcImperialBmi(ft, inch, st, lb);
        var classification = weightClassification(imperial_bmi);
        jQuery('.bmi-result-value').html(imperial_bmi);
        jQuery('.bmi-result-c-value').html(classification);
        toKg(st, lb);
        if (st == '') {
            jQuery("#bmiStLbSlider").slider('values', [0, (parseInt('0.00') * 14) + parseInt(lb)]);
        }
        if (lb == '') {
            jQuery("#bmiStLbSlider").slider('values', [0, (parseInt(st) * 14) + parseInt('0.00')]);
        }
        if (st != '' && lb != '') {
            jQuery("#bmiStLbSlider").slider('values', [0, (parseInt(st) * 14) + parseInt(lb)]);
        }
        // console.log(imperial_bmi);
    });

    jQuery(document).on('input', '#bmiLbVal', function() {
        if (jQuery('#bmiStVal').val() != '') {
            var st = jQuery('#bmiStVal').val();
        } else {
            var st = 0;
        }

        if (jQuery('#bmiInVal').val() != '') {
            var inch = jQuery('#bmiInVal').val();
        } else {
            var inch = 0;
        }

        if (jQuery(this).val() != '') {
            var lb = jQuery(this).val();;
        } else {
            var lb = 0;
        }

        if (jQuery('#bmiFtVal').val() != '') {
            var ft = jQuery('#bmiFtVal').val();
        } else {
            var ft = 0;
        }

        var imperial_bmi = calcImperialBmi(ft, inch, st, lb);
        var classification = weightClassification(imperial_bmi);
        jQuery('.bmi-result-value').html(imperial_bmi);
        jQuery('.bmi-result-c-value').html(classification);
        toKg(st, lb);
        if (st == '') {
            jQuery("#bmiStLbSlider").slider('values', [0, (parseInt('0.00') * 14) + parseInt(lb)]);
        }
        if (lb == '') {
            jQuery("#bmiStLbSlider").slider('values', [0, (parseInt(st) * 14) + parseInt('0.00')]);
        }
        if (st != '' && lb != '') {
            jQuery("#bmiStLbSlider").slider('values', [0, (parseInt(st) * 14) + parseInt(lb)]);
        }
        // console.log(imperial_bmi);

    });

})(jQuery);

jQuery(document).ready(function() {


    if (jQuery('#bmiFtInSlider').length > 0) {

        jQuery("#bmiFtInSlider").slider({
            min: 0,
            max: 107,
            values: [0, 0],
            range: false,
            slide: function(event, ui) {
                var toftIn = toInches(ui.values[1]).split('.');
                var ft = toftIn[0];
                var inch = toftIn[1];
                var st = jQuery('#bmiStVal').val();
                var lb = jQuery('#bmiLbVal').val();

                jQuery("#bmiFtVal").val(ft);
                jQuery("#bmiInVal").val(inch);

                var imperial_bmi = calcImperialBmi(ft, inch, st, lb);
                var classification = weightClassification(imperial_bmi);
                jQuery('.bmi-result-value').html(imperial_bmi);
                jQuery('.bmi-result-c-value').html(classification);
                toCm(ft, inch)
            }
        });

    }
    if (jQuery('#bmiStLbSlider').length > 0) {

        jQuery("#bmiStLbSlider").slider({
            min: 0,
            max: 993,
            values: [0, 0],
            range: false,
            slide: function(event, ui) {
                var toStLb = toStone(ui.values[1]).split('.');

                var st = toStLb[0];
                var lb = toStLb[1];
                var ft = jQuery('#bmiFtVal').val();
                var inch = jQuery('#bmiInVal').val();

                jQuery("#bmiStVal").val(st);
                jQuery("#bmiLbVal").val(lb);
                toKg(st, lb);

                var imperial_bmi = calcImperialBmi(ft, inch, st, lb);
                var classification = weightClassification(imperial_bmi);
                jQuery('.bmi-result-value').html(imperial_bmi);
                jQuery('.bmi-result-c-value').html(classification);
            }
        });
    }
    jQuery('#bmiFtInSlider .ui-slider-handle').first().hide();
    jQuery('#bmiStLbSlider .ui-slider-handle').first().hide();



    jQuery('.et_pb_toggle_title').on('click', function() {

        if (jQuery('.et_pb_toggle_content').css('display') == 'block') {
            jQuery(this).removeClass('ref_slideDown');
        } else {
            jQuery(this).addClass('ref_slideDown');
        }
    });
});

function calcMetricBmi(height, weight) {
    var h = parseFloat(height);
    var w = parseFloat(weight);
    var d_bmi = (w / h / h) * 10000;

    var bmi = d_bmi.toFixed(2);
    movePointer(bmi);

    if ((h == 0 && w == 0)) {
        bmi = "0.00";

    }

    if ((h == '' && w == '')) {
        bmi = "__";
        movePointer('0.00');
        var classification = weightClassification('0.00');
        jQuery('.bmi-result-c-value').html(classification);
    }

    return bmi;
}

function calcImperialBmi(feet, inch, stone, lbs) {

    if (feet != '') {
        var feet = feet;
    } else {
        var feet = 0;
    }

    if (inch != '') {
        var inch = inch;
    } else {
        var inch = 0;
    }

    if (stone != '') {
        var stone = stone;
    } else {
        var stone = 0;
    }

    if (lbs != '') {
        var lbs = lbs;
    } else {
        var lbs = 0;
    }


    var height = ((parseInt(feet) * 30.48) + (parseInt(inch) * 2.54)).toFixed();
    var temp_w = (parseFloat(stone) * 14 + parseFloat(lbs));
    var weight = (temp_w / 2.2).toFixed();

    var imp_bmi = calcMetricBmi(height, weight);
    // console.log(imp_bmi);
    return imp_bmi;
}
var pcent = 0;

function movePointer(bmi) {

    var pdata = jQuery(".bmi-calculator").attr("data-progress");
    var jdata = JSON.parse(pdata);
    var jkeys = Object.keys(jdata);
    var bmires = parseFloat(bmi);
    pcent = (100 * (bmires - jdata[jkeys[0]][0])) / 25;
    pcent = 0 > pcent ? 0 : 100 < pcent ? 100 : pcent;
    jQuery('.pointer').css('left', pcent + '%');

}

function toFeetInch(n) {
    var realFeet = ((n * 0.393700) / 12);
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);
    jQuery('#bmiFtVal').val(feet);
    jQuery('#bmiInVal').val(inches);
    jQuery("#bmiFtInSlider").slider('values', [0, (parseInt(feet) * 12) + parseInt(inches)]);
}

function toStoneLb(n) {
    var StoneLb = parseFloat(n / 6.35029318).toString().split('.');
    var stone = parseInt(StoneLb[0]);
    var temp_lbs = '0.' + StoneLb[1];
    var lbs = (parseFloat(temp_lbs) * 14).toFixed();
    jQuery('#bmiStVal').val(stone);
    jQuery('#bmiLbVal').val(lbs);
    jQuery("#bmiStLbSlider").slider('values', [0, (parseInt(stone) * 14) + parseInt(lbs)]);
}

function toKg(st, lbs) {
    var first = parseFloat(st * 6.35029318);
    var second = parseFloat(lbs * 0.45359237);
    var kg = parseFloat(first + second).toFixed();
    // console.log(kg);
    jQuery('#bmiWeightVal').val(kg);
    jQuery('#bmiWeightSlider').val(kg);
}

function toCm(ft, inch) {
    var first = parseFloat(parseInt(ft) * 30.48);
    var second = parseFloat(parseInt(inch) * 2.54);
    var cm = parseFloat(first + second).toFixed();
    // console.log(cm);
    jQuery('#bmiHeightVal').val(cm);
    jQuery('#bmiHeightSlider').val(cm);
}

function weightClassification(bmi) {
    if (bmi == 0) {
        Result('E');
        return '__';
    }
    if (bmi > 0.1 && bmi < 18.49) {
        Result('Uw');
        return 'Under weight';
    }
    if (bmi > 18.50 && bmi < 22.99) {
        Result('Nw');
        return 'Normal weight';
    }
    if (bmi > 23.00 && bmi < 27.49) {
        Result('Po');
        return 'Pre-obesity or Overweight';
    }
    if (bmi > 27.50) {
        Result('O');
        return 'Obesity';
    }
}

var pixel = null;

function Result(classify) {
    // console.log(classify);

    if (classify == 'Uw') {
        jQuery('.bmi-result-comment').html('Being underweight could be a sign of not eating enough or that you maybe ill. Contact your doctor for further evaluation.');
    }

    if (classify == 'Nw') {
        jQuery('.bmi-result-comment').html('Your weight is in the normal range. Medical experts recommend that you keep your weight within this range.');
    }


    if (classify == 'Po') {
        jQuery('.bmi-result-comment').html('The term ‘pre-obesity’ was previously classified as ‘overweight’ by the World Health Organization (WHO).People who fall into this category may be at risk of developing obesity, other health problems, or their current health problems may worsen. Consult a healthcare professional to discuss ways to improve your health and quality of life.');
    }



    if (classify == 'O') {
        // Sailor Edits: Add link for obesity
        var site_url = window.location.origin;
        const obesity_page = '<a href="' + site_url + '/?p=26">here.</a>';
        // End Sailor Edits: Add link for obesity


        jQuery('.bmi-result-comment').html('People who have BMI equal or over 27.5 are classified as having obesity, which is defined as an abnormal or excessive accumulation of fat that may harm health. It is recommended that you consult a healthcare professional trained in obesity management for diagnosis, risk assessment and treatment of obesity and weight-related health complications. The goal of managing and treating obesity is not simply to lose weight and keep it off, but instead to improve health and lower the risks of other health complications. Losing even a modest amount of weight, such as five percent of body weight or more, and maintaining this weight loss, can improve overall wellbeing, while also reducing the risk of weight-related complications. Read more about the management of obesity and treatment options ' + obesity_page);


        if (pixel == null) {
            pixel = 'fired';
        }

    }

    if (classify == 'E') {
        jQuery('.bmi-result-comment').html('');
    }

}

function toInches(n) {
    return Math.floor(n / 12) + "." + (n % 12);
}

function toStone(n) {
    return Math.floor(n / 14) + "." + (n % 14);
}