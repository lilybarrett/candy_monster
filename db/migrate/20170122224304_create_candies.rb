class CreateCandies < ActiveRecord::Migration
  def change
    create_table :candies do |t|
      t.string :name, null: false
      t.integer :rating
      t.text :comment

      t.timestamps
    end
  end
end
