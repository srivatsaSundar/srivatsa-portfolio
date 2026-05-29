import random
import math
from PIL import Image, ImageDraw

def create_og_image():
    width = 1200
    height = 630
    background_color = (0, 0, 0)
    
    # Create a new image with black background
    img = Image.new('RGB', (width, height), background_color)
    draw = ImageDraw.Draw(img, 'RGBA')

    # Configuration for nodes
    num_nodes = 40
    nodes = []
    
    # Generate random node positions
    for _ in range(num_nodes):
        nodes.append({
            'x': random.randint(50, width - 50),
            'y': random.randint(50, height - 50),
            'size': random.randint(3, 6)
        })

    # Draw connections
    for i in range(num_nodes):
        for j in range(i + 1, num_nodes):
            dx = nodes[i]['x'] - nodes[j]['x']
            dy = nodes[i]['y'] - nodes[j]['y']
            distance = math.sqrt(dx*dx + dy*dy)
            
            # Connect if close enough
            if distance < 250:
                opacity = int(255 * (1 - distance / 250) * 0.3)  # Fade out with distance
                draw.line(
                    [(nodes[i]['x'], nodes[i]['y']), (nodes[j]['x'], nodes[j]['y'])], 
                    fill=(255, 255, 255, opacity), 
                    width=1
                )

    # Draw nodes
    for node in nodes:
        # Draw glow (larger circle with low opacity)
        glow_size = node['size'] * 4
        # Create a temporary image for the glow to handle alpha compositing correctly
        # Actually PIL needs careful handling for alpha compositing on RGB images
        # Simplest is just drawing a filled circle with low alpha directly
        draw.ellipse(
            (node['x'] - glow_size, node['y'] - glow_size, 
             node['x'] + glow_size, node['y'] + glow_size),
            fill=(255, 255, 255, 20)
        )
        
        # Draw core node
        draw.ellipse(
            (node['x'] - node['size'], node['y'] - node['size'], 
             node['x'] + node['size'], node['y'] + node['size']),
            fill=(255, 255, 255, 255)
        )

    # Save the image
    output_path = "e:/portfolios/vatsa/srivatsa-portfolio/public/og-image.png"
    img.save(output_path)
    print(f"OG Image saved to {output_path}")

if __name__ == "__main__":
    create_og_image()
