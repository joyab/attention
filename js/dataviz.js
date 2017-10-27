		d3.json('data/hidfig.json', function(data){
		    for (var i = 0; i < data.length; i++) {
		        data[i] = MG.convert.date(data[i], 'date');
		    };
		    MG.data_graphic({
		       
		       	title:'Coverage of Historic Figures',
		        data: [data[0], data[1]],
		        width: 650,
		        height: 300,
		        right: 40,
		        target: '#hid-fig',
		        legend: ['Katherine Johnson : 24 Articles',' John Glenn : 146 Articles'],
		        legend_target: 'div#custom-color-key',
		        colors: ['purple', 'green'],
		        aggregate_rollover: true,
		        animate_on_load: true,
		        linked: true,
		        decimals: 0,
		        min_x: new Date('2000-01-01'),
		        x_mouseover: '20%y  ',
 
		    });
			})


		d3.json('data/hidfig.json', function(data){
		    for (var i = 0; i < data.length; i++) {
		        data[i] = MG.convert.date(data[i], 'date');
		    };


		    var markers = [{
		        'date': new Date('2015-01-01T00:00:00.000Z'),
		        'label': 'Medal of Freedom'
		    }, {
		        'date': new Date('2016-01-01T00:00:00.000Z'),
		        'label': 'Hidden Figures'
		    }];


		    MG.data_graphic({
		        title: 'Katherine Johnson Articles',
		        data: data[0],
		        width: 650,
		        height: 200,
		        right: 0,
		        target: '#kath',
		        colors: ['purple'],
		        linked: true,
		        markers: markers,
		        show_rollover_text: true,
		        animate_on_load: true,
		        interpolate: d3.curveLinear,
		        min_x: new Date('2011-01-01'),
       			decimals: 1,
       			x_mouseover: '20%y  ',
       			
		    });
			})


		d3.json('data/hidfig.json', function(data){
		    for (var i = 0; i < data.length; i++) {
		        data[i] = MG.convert.date(data[i], 'date');
		    };


		    var markers = [{
		        'date': new Date('2012-01-01T00:00:00.000Z'),
		        'label': 'Medal of Freedom'
		    }, {
		        'date': new Date('2016-01-01T00:00:00.000Z'),
		        'label': 'Hidden Figures'
		    }];


		    MG.data_graphic({
		    	title: 'John Glenn Articles',
		        data: data[1],
		        width: 650,
		        height: 200,
		        right: 0,
		        target: '#glenn',
		        colors: ['green'],
		        linked: true,
		        markers: markers,
		        show_rollover_text: true,
		        animate_on_load: true,
		        interpolate: d3.curveLinear,
		        min_x: new Date('2011-01-01'),
       			decimals: 1,
       			x_mouseover: '20%y  ',
       			
		    });
			})
