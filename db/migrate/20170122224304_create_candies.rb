class CreateCandies < ActiveRecord::Migration
  def change
    create_table :candies do |t|
      t.string :name, null: false
      t.text :image_url
      t.text :description

      t.timestamps
    end
  end
end
