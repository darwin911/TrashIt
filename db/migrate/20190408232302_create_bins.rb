class CreateBins < ActiveRecord::Migration[5.2]
  def change
    create_table :bins do |t|
      t.string :name
      t.integer :size
      t.integer :weight

      t.timestamps
    end
  end
end
