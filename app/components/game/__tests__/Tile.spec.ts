import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tile from '../Tile.vue'

describe('Tile Component', () => {
  it('devrait afficher un fond orange pour une tuile avec la valeur 2', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 2
      }
    })

    const tileElement = wrapper.find('.tile')
    expect(tileElement.classes()).toContain('bg-amber-100')
  })
})
