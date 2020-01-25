    $(function() {
        let element = $('#container-01');
        let config = { backgroundColor: 'white' };
        let viewer = $3Dmol.createViewer( element, config );
        viewer.addSphere({ center: {x:Math.sqt(8/9), y:0, z:-1/3}, radius: 2.0, color: 'green' });
        viewer.addArrow({start:{x:Math.sqt(8/9), y:0, z:-1/3},end:{x:0, y:0, z:1},radius: 0.5,
            radiusRadio:1.0,
            mid:1.0,   clickable:true,
            callback:function(){
                this.color.setHex(0xFF0000FF);
                viewer.render( );
            }})
        viewer.addSphere({ center: {x:0, y:0, z:1}, radius: 2.0, color: 'yellow' });
        viewer.addArrow({start:{x:0, y:0, z:0},end:{x:-6, y:-6, z:-6},radius: 0.5,
            radiusRadio:1.0,
            mid:1.0,   clickable:true,
            callback:function(){
                this.color.setHex(0xFF0000FF);
                viewer.render( );
            }})
        viewer.addSphere({ center: {x:-Math.sqrt(2/9), y:Math.sqrt(2/3), z:-1/3}, radius: 2.0, color: 'blue' });
        viewer.addSphere({ center: {x:Math.sqrt(2/9), y:-Math.sqrt(2/3), z:-1/3}, radius: 2.0, color: 'blue' });

        viewer.zoomTo();
        viewer.render();
        viewer.zoom(0.8, 500);
    });