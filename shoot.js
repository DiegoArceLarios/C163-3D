AFRAME.registerComponent('bullets', {
    schema:{

    },
    init: function(){
        this.shootBullet()
    },
    shootBullet: function(){
        window.addEventListener("keydown", (e)=>{
            if(e.key === "z"){
                var bullet = document.createElement('a-entity')
                bullet.setAttribute("geometry", {
                    primitive: 'sphere',
                    radius: 0.1
                })
                bullet.setAttribute('material', {
                    color: "black"
                })
                var cameraInfo = document.querySelector('#camera')

                var pos = cameraInfo.getAttribute('position')
                bullet.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})

                var camera3D = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                direction.x += 20
                camera3D.getWorldDirection(direction)
                
                console.log(camera3D.rotation)
                
                bullet.setAttribute('velocity', direction.multiplyScalar(-10))

                var sceneInfo = document.querySelector('#scene')
                sceneInfo.appendChild(bullet)
            }
        })
    }

})